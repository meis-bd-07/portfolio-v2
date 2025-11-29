import { FINDER_CONS } from "@constants";
import type { FinderItem } from "@type/finder";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const DEFAULT_LOCATION = FINDER_CONS.locations.work

export type ISetActiveLocation = <T extends FinderItem>(location: T | null) => void

type IState =  {
    activeLocation: FinderItem | null;
}

type IActions = {
    setActiveLocation: ISetActiveLocation;
    resetActiveLocation: () => void;
}

const initialStates = {
    activeLocation: DEFAULT_LOCATION
}

const useFinderStore = create(immer<IState & IActions>((set) => ({
    ...initialStates,
    setActiveLocation: (location) => set((state) => {
        if(!location) return state;
        state.activeLocation = location
    }),
    resetActiveLocation: () => set((state) => {
        if(!location) return state;
        state.activeLocation = DEFAULT_LOCATION
    })
})))

export default useFinderStore;