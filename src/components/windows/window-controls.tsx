import type { IWindowKey } from "@stores/window-store";
import useWindowStore from "@stores/window-store";

const WindowControls = ({target}: {target: IWindowKey}) => {
    const {closeWindow} = useWindowStore(s => s)
    return (
        <div id="window-controls">
            <div className="close" onClick={() => closeWindow(target)} />
            <div className="minimize"/>
            <div className="maximize"/>
        </div>
    )
};

export default WindowControls;