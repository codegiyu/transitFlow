import Logo from "../components/Logo"
import AddressSingle from "../components/AddressSingle"
import ErrorBoundary from "../components/ErrorBoundary"
import uuid from "react-uuid"
import { CONTACT_DATA } from "../data/data"
import { SOCIAL_MEDIA } from "../data/data"
import { RxCaretDown } from "react-icons/rx"
import { Link } from "react-router-dom"
import SocialMediaIcon from "../components/SocialMediaIcon"

const Header = () => {
    const { mail, time, phone } = CONTACT_DATA
    const contactsArr = [time, mail, phone]

    const { instagram, facebook, twitter, linkedin } = SOCIAL_MEDIA
    const socMedArr = [instagram, facebook, twitter, linkedin]

    return (
        <header className="w-full px-20 py-[2.875rem] flex justify-center text-white bg-blue relative">
            <section className="w-[75rem] flex items-center justify-between">
                <Logo />
                <div className="w-fit flex gap-10">
                    { contactsArr.map(item => {
                        return (
                            <ErrorBoundary key={uuid()}>
                                <AddressSingle key={uuid()} addressProps={item} />
                            </ErrorBoundary>
                        )
                    })}
                </div>
            </section>
            <section className="w-full h-[4.875rem] bg-blue25 absolute -bottom-[4.875rem] left-0 z-10
                px-20"
            >
                <div className="max-w-[75rem] mx-auto flex items-center justify-between">
                    <nav>
                        <ul className="font-krub font-semibold text-base leading-[1.375rem] w-max flex">
                            <li className="pr-[1.875rem] border-r border-[#FFFFFF20]">
                                <Link to="#" className="">
                                    <p className="underline underline-offset-[1.9375rem] decoration-2 hover:text-gold
                                        hover:decoration-gold"
                                    >
                                        Home
                                    </p>
                                </Link>
                            </li>
                            <li className="px-[1.875rem] border-r border-[#FFFFFF20]">
                                <Link to="#" className="">
                                    <p className="hover:text-gold">About</p>
                                </Link>
                            </li>
                            <li className="px-[1.875rem] border-r border-[#FFFFFF20]">
                                <div className="w-fit flex gap-[4px] items-center cursor-pointer hover:text-gold">
                                    <p className="">Pages</p>
                                    <RxCaretDown className="text-[20px]" />
                                </div>
                            </li>
                            <li className="px-[1.875rem] border-r border-[#FFFFFF20]">
                                <Link to="#" className="">
                                    <p className="hover:text-gold">Projects</p>
                                </Link>
                            </li>
                            <li className="pl-[1.875rem] border-[#FFFFFF20]">
                                <Link to="#" className="">
                                    <p className="hover:text-gold">Contacts</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="w-fit flex gap-[3.125rem] items-center">
                        <div className="w-fit flex gap-6 items-center">
                            { socMedArr.map(item => {
                                return (
                                    <ErrorBoundary key={uuid()}>
                                        <SocialMediaIcon key={uuid()} socMedProps={item} />
                                    </ErrorBoundary>
                                )
                            })}
                        </div>
                        <button className="h-[4.875rem] bg-white border-none outline-none px-[3.25rem] font-krub
                            font-semibold text-base text-[#23212A] leading-[4.875rem]"
                        >
                            Request Quote
                        </button>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header