import { WindowControls } from "@components/windows";
import { FINDER_CONS } from "@constants";
import WindowWrapper from "@hocs/window-wrapper";
import useFinderStore from "@stores/finder-store";
import useWindowStore, { type IWindowKey } from "@stores/window-store";
import type { FinderItem } from "@type/finder";
import { Search } from "lucide-react";



const FinderUi = () => {
    const {openWindow} = useWindowStore(s => s)
    const {activeLocation, setActiveLocation} = useFinderStore(s => s);

    const openItem = (item: FinderItem) => {
        if(item.kind === 'file'){
            if(item.fileType === 'pdf') return openWindow('resume');
            if(['fig', 'url'].includes(item.fileType) && item.href){
                return window.open(item.href, '_blank')
            }
            return openWindow(`${item.fileType}${item.kind}` as IWindowKey, item)
        }
        if(item.kind === 'folder'){
            return setActiveLocation(item)
        }
    }

    const renderList = <T extends FinderItem>(title: string, list: T[]) => {
        return (
            <div>
                <h3>{title}</h3>
                <ul>
                {list.map(item => (
                    <li key={item.id} onClick={() => setActiveLocation(item)} className={`${item.id === activeLocation?.id ? 'active' : 'not-active'}`}>
                        <img src={item.icon} className='w-4' alt={item.name} />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
                </ul>
            </div>
        )
    };
    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList("Favorites", Object.values(FINDER_CONS.locations))}
                    {renderList("My Projects", FINDER_CONS.locations.work.children)}
                </div>

                <ul className="content">
                    {activeLocation?.kind === "folder" &&
                    activeLocation?.children.map(item => (
                        <li key={item.id} className={`${item.position}`} onClick={() => openItem(item)}>
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))
                    }
                </ul>
            </div>

        </>
    )
};
const Finder = WindowWrapper(FinderUi, 'finder');
export default Finder;