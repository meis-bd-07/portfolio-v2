import { WELCOME_CONS } from "@constants";
import gsap from "gsap";

type CleanupFn = () => void;
type ISetupWelcomeTextHover = (container: HTMLElement | null, type: 'title' | 'subTitle') => CleanupFn;

const setupWelcomeTextHover: ISetupWelcomeTextHover = (container, type: 'title' | 'subTitle') => {
    if(!container) return () => {};
    const letters = container.querySelectorAll<HTMLSpanElement>('span');
    const {min, max, default: base} = WELCOME_CONS.FONT_WEIGHTS[type]

    const animateLetter = (letter: HTMLElement, weight: number, duration: number = 0.25) => {
        return gsap.to(letter, {duration, ease: 'power2.out', fontVariationSettings: `'wght' ${weight}`})
    }

    const handleMouseMove = (e: MouseEvent): void => {
        const {left} = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach(letter => {
            const {left: l, width: w} = letter.getBoundingClientRect()
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000)
            animateLetter(letter, (min + (max - min) * intensity))
        });
    }
    const handleMouseLeave = (): void => letters.forEach(letter => animateLetter(letter, base, 0.3));
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
    }
};

export default setupWelcomeTextHover;