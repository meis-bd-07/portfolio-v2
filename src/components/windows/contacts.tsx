import WindowWrapper from "@hocs/window-wrapper";
import WindowControls from "./window-controls";
import { SOCIAL_CONS } from "@constants";

const Contacts = () => {

    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img src="/images/adrian.jpg" alt="Mohammad Erfanul Islam" className="w-20 rounded-full" />
                <h3>Let's Connect</h3>
                <p>Got an idea. A bug to squash? Or just wanna talk tech? I'm in.</p>
                <p>Mail to: erfan.orangetoolz@gmail.com</p>
                <p>Mobile: +880-1825-262557</p>

                <ul>
                    {SOCIAL_CONS.socials.map(social => (
                        <li key={`${social.id}`} style={{background: social.bg}}>
                            <a href={social.link} target="_blank" rel="noopener noreferrer" title={social.text}>
                                <img src={social.icon} alt={social.text} className="size-5" />
                                <p>{social.text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

const ContactsWindow = WindowWrapper(Contacts, 'contact');

export default ContactsWindow