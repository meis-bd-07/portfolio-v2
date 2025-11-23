import { WINDOWS_CONS } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type IWindowKey = keyof typeof WINDOWS_CONS.WINDOW_CONFIG;
// "finder" | "contact" | "resume" | "safari" | "photos" | "terminal" | "txtfile" | "imgfile"
type WindowState = { isOpen: boolean; zIndex: number, data: unknown }
type IState =  {
    windows: Record<IWindowKey, WindowState>;
    nextZIndex: number;
}

type IActions = {
    openWindow: (windowKey: IWindowKey, data: unknown) => void;
    closeWindow: (windowKey: IWindowKey) => void;
    focusWindow: (windowKey: IWindowKey) => void;
}

const initialStates: IState = {
    windows: WINDOWS_CONS.WINDOW_CONFIG,
    nextZIndex: WINDOWS_CONS.INITIAL_Z_INDEX,
}
const useWindowStore = create(immer<IState & IActions>((set) => ({
    ...initialStates,
    openWindow: (windowKey, data = null) => set((state) => {
        const window = state.windows[windowKey];
        if(!window){return}
        window.isOpen = true;
        window.zIndex = state.nextZIndex;
        window.data = data ?? window.data;
        state.nextZIndex++;
    }),
    closeWindow: (windowKey) => set((state) => {
        const window = state.windows[windowKey];
        if(!window){return}
        window.isOpen = false;
        window.zIndex = WINDOWS_CONS.INITIAL_Z_INDEX;
        window.data = null;
    }),
    focusWindow: (windowKey) => set((state) => {
        const window = state.windows[windowKey];
        if(!window){return}
        window.zIndex = state.nextZIndex++;
    })
})))

export default useWindowStore;
