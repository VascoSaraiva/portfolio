import Link from "next/link";
import { Button, TitleSection } from "."
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { contacts } from "@/constants";

const Footer = () => {

    return (
        <footer id="contacts" className="border-t border-main-400 mt-28">
            <div className="appContainer">
                <TitleSection
                    title='Contacts'
                    text='This is where you can find me.'
                />

                <section data-aos='fade-up' className="flex items-center justify-between flex-col lg:flex-row gap-7 lg:gap-4 xl:gap-8 text-center">
                    {contacts.map((contact, index) => (
                        <div key={contact.type} className={`w-full flex justify-center items-center flex-col border border-main-400 rounded-md xl:aspect-square h-[400px] lg:h-[380px] lg:w-1/3 xl:h-auto ${index === 1 && 'bg-gradient-to-br from-main-200 to-main-100'}`}>


                            {contact.type === 'GitHub' ?
                                <GitHubIcon className="mb-6" sx={{ fontSize: 48 }} /> :
                                contact.type === 'LinkedIn' ?
                                    <LinkedInIcon className="mb-6" sx={{ fontSize: 48 }} /> :
                                    <EmailIcon className="mb-6" sx={{ fontSize: 48 }} />
                            }

                            <h1 className="font-poppins text-2xl mb-4">{contact.type}</h1>
                            <p className="text-main-600 w-72 mb-8">{contact.text}</p>
                            <Button title={contact.buttonText}
                                handleClick={
                                    contact.type != 'Email' ?
                                        contact.link :
                                        `mailto:${contact.link}?subject=Let's talk!`
                                } />
                        </div>
                    ))}

                </section>
            </div>

            <div className="border-t border-main-400 mt-28 h-20 sm:h-14 flex items-center">
                <div className="appContainer flex  flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between text-main-600">

                    <p>© 2023 Vasco Saraiva</p>

                    <div className="flex items-center gap-2">
                        <Link aria-label='About me.' className="hover:text-main-700 transition-colors duration-200" href='/#aboutMe'>About me</Link>
                        &#183;
                        <Link aria-label='My works.' className="hover:text-main-700 transition-colors duration-200" href='/#works'>Works</Link>
                        &#183;
                        <Link aria-label='Contact me!' className="hover:text-main-700 transition-colors duration-200" href='#contacts'>Contacts</Link>
                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer



