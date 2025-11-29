import WindowWrapper from "@hocs/window-wrapper";
import WindowControls from "./window-controls";
import { Mail, Search } from "lucide-react";
import useWindowStore from "@stores/window-store";
import { GALLERY_CONS } from "@constants";
import { useState } from "react";

const galleryImageObject = (url: string, id: number) => {
    return {
        id: id,
        name: 'Gallery Image',
        icon: '/images/image.png',
        kind: 'file',
        fileType: 'img',
        imageUrl: url
    }
}

const GalleryWindow = () => {
    const openWindow = useWindowStore(s => s).openWindow;
    const [folder, setFolder] = useState<number>(1)

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon"/>
                    <Search className="icon"/>
                </div>
            </div>

            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {GALLERY_CONS.photosLinks.map(({icon, id, title}) => (
                            <li key={id} className={`${id === folder ? 'active' : 'not-active'}`} onClick={() => setFolder(id)}>
                                <img src={icon} alt={title} />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul>
                        {GALLERY_CONS.gallery.map(({id, img}) => (
                            <li key={id} onClick={() => openWindow('imgfile', galleryImageObject(img, id))}>
                                <img src={img} alt={`Galley Image ${id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
};

const Gallery = WindowWrapper(GalleryWindow, 'photos');

export default Gallery;