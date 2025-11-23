import { useGSAP } from "@gsap/react";
import { setupDockAppHover } from "@helpers";
import useWindowStore, { type IWindowKey } from "@stores/window-store";
import { useRef } from "react";

const useDockHook = () => {
    const dockRef = useRef<HTMLDivElement>(null);
    const {windows, openWindow, closeWindow} = useWindowStore(s => s);

    useGSAP(() => {
        const dockAppCleanup = setupDockAppHover(dockRef.current);
        return () => {
            dockAppCleanup();
        }
    }, [])

    const toggleDockApp = ({canOpen, id}: {id: IWindowKey; canOpen: boolean}) => {
        if(!canOpen) return;
        const window = windows[id];
        if(!window){
            console.log('window is not found for app id: ' + id);
            return;
        }
        if(window.isOpen) closeWindow(id);
        else openWindow(id, window.data);
    }

    return {
        dockRef,
        toggleDockApp
    }
};

export default useDockHook;