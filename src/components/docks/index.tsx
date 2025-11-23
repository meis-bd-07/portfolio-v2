import { Tooltip } from "react-tooltip";
import { DOCK_CONS } from "@constants";
import { useDockHook } from "@hooks";

const Docks = () => {
    const {dockRef, toggleDockApp} = useDockHook();
    
    return (
        <section id="dock">
            <div ref={dockRef} className="dock-container">
                {DOCK_CONS.dockApps.map(({canOpen, icon, id, name}) => (
                    <div key={id ?? name} className="relative flex justify-center">
                        <button 
                            type="button" 
                            className="dock-icon" 
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toggleDockApp({id, canOpen})}
                        >
                            <img 
                                src={`/images/${icon}`}
                                alt={name}
                                loading="lazy"
                                className={canOpen ? '' : 'opacity-60'}
                            />
                        </button>
                    </div>
                ))}
            </div>
            <Tooltip id="dock-tooltip" place="top" className="tooltip" />
        </section>
    )
}

export default Docks;