import { HEADER_CONS } from "@constants";
import useWindowStore from "@stores/window-store";
import dayjs from "dayjs";

const Navbar = () => {
    const {openWindow} = useWindowStore(s => s)

    return (
        <nav>
            {/* left */}
            <div>
                <img src="/images/logo.svg" alt="portfolio-logo" />
                <p className="font-bold">Erfan's Portfolio</p>
                <ul>{HEADER_CONS.navLinks.map(({id, name, type}) => <li onClick={() => openWindow(type)} key={id}><p>{name}</p></li>)}</ul>
            </div>
            {/* right */}
            <div>
                <ul>{HEADER_CONS.navIcons.map(({id, img}) => <li key={id}><img src={img} className="icon-hover" alt={`icon-${id}`} /></li>)}</ul>
                <time>{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    )
};

export default Navbar;