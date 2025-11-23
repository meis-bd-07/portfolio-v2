import { useGSAP } from "@gsap/react";
import { setupWelcomeTextHover } from "@helpers";
import { useRef } from "react";

const useWelcomeHook = () => {
    const titleRef = useRef<HTMLParagraphElement>(null);
    const subTitleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const titleCleanup = setupWelcomeTextHover(titleRef.current, 'title');
        const subTitleCleanup =  setupWelcomeTextHover(subTitleRef.current, 'subTitle');

        return () => {
            titleCleanup();
            subTitleCleanup()
        }
    }, [])

    return {
        titleRef,
        subTitleRef
    }
};

export default useWelcomeHook;