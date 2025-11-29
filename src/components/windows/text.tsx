import WindowWrapper from "@hocs/window-wrapper";
import WindowControls from "./window-controls";
import useWindowStore from "@stores/window-store";
import type { FinderFile } from "@type/finder";

const Text = () => {
    const {windows} = useWindowStore(s => s);
    const data = windows.txtfile?.data;

    if(!data) return null;
    const {name, image, subtitle, description} = data as FinderFile;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-6 bg-white">
                {image && (
                    <div className="w-full">
                        <img src={image} alt={name} className="w-full h-auto rounded" />
                    </div>
                )}

                {subtitle && (<h3 className="text-lg font-semibold">{subtitle}</h3>)}

                {Array.isArray(description) && description.length > 0 && (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {description.map((des, index) => (
                            <p key={`${index}`}>{des}</p>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
};

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;