import WindowWrapper from "@hocs/window-wrapper";
import WindowControls from "./window-controls";
import useWindowStore from "@stores/window-store";
import type { FinderFile } from "@type/finder";

const Image = () => {
    const {windows} = useWindowStore(s => s);
    const data = windows.imgfile?.data;

    if(!data) return null;
    const {name, imageUrl} = data as FinderFile;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white">
                {imageUrl && (
                    <div className="w-full">
                        <img src={imageUrl} alt={name} className="w-full h-auto max-h-[70vh] object-contain rounded" />
                    </div>
                )}
            </div>
        </>
    )
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;