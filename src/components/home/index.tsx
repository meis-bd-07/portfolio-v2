import { locations } from "@constants/finder";
import { useGSAP } from "@gsap/react";
import useFinderStore from "@stores/finder-store";
import useWindowStore from "@stores/window-store";
import type { FinderItem } from "@type/finder";
import { Draggable } from "gsap/Draggable";

const projects = locations.work.children || [];

const Home = () => {
    const {openWindow} = useWindowStore(s => s)
    const {setActiveLocation} = useFinderStore(s => s)

    const handleOpenProjectFinder = (project: FinderItem) => {
        setActiveLocation(project);
        openWindow('finder')
    }

    useGSAP(() => {
        Draggable.create('.folder')
    }, [])

    return (
        <section id="home">
            <ul>
                {projects.map(project => (
                    <li key={`${project.id}`} className={`group folder ${project.windowPosition}`} onClick={() => handleOpenProjectFinder(project)}>
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default Home;