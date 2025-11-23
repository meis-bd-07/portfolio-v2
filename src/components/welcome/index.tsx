import { WELCOME_CONS } from "@constants";
import { renderWelcomeText } from "@helpers";
import { useWelcomeHook } from "@hooks";

const Welcome = () => {
    const {titleRef, subTitleRef} = useWelcomeHook();
    
    return (
        <section id="welcome">
            <p ref={titleRef}>{renderWelcomeText(WELCOME_CONS.texts.title, 'text-3xl font-georama', 100)}</p>
            <h1 ref={subTitleRef} className="mt-7">{renderWelcomeText(WELCOME_CONS.texts.subTitle, 'text-9xl italic font-georama', 100)}</h1>

            <div className="small-screen"><p>{WELCOME_CONS.texts.deviceSizeWarning}</p></div>
        </section>
    )
};

export default Welcome;