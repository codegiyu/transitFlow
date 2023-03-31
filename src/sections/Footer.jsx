// import { Link } from "react-router-dom"
import uuid from "react-uuid"
import footerImg from "../assets/images/footer.png"
import AddressSingle from "../components/AddressSingle"
import ErrorBoundary from "../components/ErrorBoundary"
import Logo from "../components/Logo"
import { CONTACT_DATA } from "../data/data"
import { SOCIAL_MEDIA } from "../data/data"
import FooterNavLink from "../components/FooterNavLink"
import { InputDark } from "../components/Input"
import { useEffect, useState } from "react"
import helpers from "../helpers"
import { ButtonGoldNormal } from "../components/Button"
import SocialMediaIcon from "../components/SocialMediaIcon"

const Footer = () => {
    const [value, setValue] = useState("")
    const [hasError, setHasError] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const changeHandler = (e) => {
        const value = e.target.value

        try {
            setValue(value)
            if (!helpers.validateEmail(value)) throw new Error("invalid email")

            setHasError(false)
        } catch (err) {
            if (err.message === "invalid email") setHasError(true)
        }
    }

    const clickHandler = (e) => {
        e.preventDefault()

        setIsSubmitting(true)

        setTimeout(() => {
            setValue("")
            setIsSubmitting(false)
        }, 2500)
    }

    useEffect(() => {
        if (!value || hasError) setDisabled(true)
        else setDisabled(false)
    }, [value, hasError])
    
    const { mail, phone } = CONTACT_DATA
    const contactsArr = [mail, phone]

    const { linkedin, twitter, facebook } = SOCIAL_MEDIA
    const socMedArr = [linkedin, twitter, facebook]

    const pagesLinks = ["About Us", "Our Team", "Our Projects", "Pricing", "Contact"]
    const utilityLinks = ["Style Guide", "Changelog", "Licenses", "Protected", "Not Found"]
    const bottomLinks = ["Style Guide", "Licenses", "Changelog", "Password"]

    const subscribeInput = {
        type: "email",
        placeholder: "Email Here*",
        name: "email",
        value,
        changeHandler,
        hasError
    }

    const subscribeBtn = {
        text: isSubmitting ? "Sending..." : "Send now",
        type: "submit",
        disabled,
        clickHandler
    }

    return (
        <footer className="w-full">
            <figure className="w-full aspect-[4.66]">
                <img src={ footerImg } alt="shipyard with containers" className="w-full object-cover" />
            </figure>
            <section className="w-full px-20 flex justify-center bg-blue relative z-0 pb-11">
                <div className="w-full h-[7.375rem] bg-[#FFFFFF08] absolute top-0 left-0 z-[1]"></div>
                <div className="w-[75rem] grid grid-cols-[320px_100px_100px_320px] justify-between z-[3] text-white">
                    <div className="">
                        <div className="h-[7.375rem] flex items-center relative after:w-[120%] after:z-[2]
                            after:bg-blue after:absolute after:top-0 after:left-[-10%] after:h-full"
                        >
                            <ErrorBoundary>
                                <Logo />
                            </ErrorBoundary>
                        </div>
                        <div className="pt-5">
                            <p className="font-krub font-normal text-base text-white mb-8">
                                Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.
                            </p>
                            <div className="flex flex-col gap-[1.875rem]">
                                { contactsArr.map(item => {
                                    return (
                                        <ErrorBoundary key={uuid()}>
                                            <AddressSingle key={uuid()} addressProps={item} />
                                        </ErrorBoundary>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="h-[7.375rem] flex items-center">
                            <h4 className="font-rubik font-medium text-[1.5625rem] leading-[1.875rem]">
                                Pages
                            </h4>
                        </div>
                        <nav className="pt-5 font-krub font-normal text-base leading-[2.5rem]">
                            <ul className="w-fit flex flex-col text-white">
                            { pagesLinks.map(item => {
                                return (
                                    <ErrorBoundary key={uuid()}>
                                        <FooterNavLink key={uuid()} text={item} />
                                    </ErrorBoundary>
                                )
                            }) }
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className="h-[7.375rem] flex items-center">
                            <h4 className="font-rubik font-medium text-[1.5625rem] leading-[1.875rem]">
                                Utility
                            </h4>
                        </div>
                        <nav className="pt-5 font-krub font-normal text-base leading-[2.5rem]">
                            <ul className="w-fit flex flex-col text-white">
                            { utilityLinks.map(item => {
                                return (
                                    <ErrorBoundary key={uuid()}>
                                        <FooterNavLink key={uuid()} text={item} />
                                    </ErrorBoundary>
                                )
                            }) }
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className="h-[7.375rem] flex items-center">
                            <h4 className="font-rubik font-medium text-[1.5625rem] leading-[1.875rem]">
                                Subscribe
                            </h4>
                        </div>
                        <div className="w-full pt-5">
                            <ErrorBoundary>
                                <InputDark inputProps={subscribeInput} />
                            </ErrorBoundary>
                            <div className="w-full flex gap-9 items-center mt-5">
                                <ErrorBoundary>
                                    <ButtonGoldNormal btnProps={subscribeBtn} />
                                </ErrorBoundary>
                                <div className="w-fit flex gap-[1.625rem] items-center">
                                    { socMedArr.map(item => {
                                        return (
                                            <ErrorBoundary key={uuid()}>
                                                <SocialMediaIcon key={uuid()} socMedProps={item} />
                                            </ErrorBoundary>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-20 flex justify-center bg-blue border-t border-[#4E5683]">
                <div className="w-[75rem] flex items-center justify-between py-4 font-krub font-medium 
                    text-base leading-[2.5rem]"
                >
                    <p className=" text-white">
                        Copyright &copy; TransitFlow | Designed by VictorFlow - Powered by Webflow.
                    </p>
                    <nav>
                        <ul className="w-fit flex gap-8 text-[#8388A7] items-center">
                            { bottomLinks.map(item => {
                                return (
                                    <ErrorBoundary key={uuid()}>
                                        <FooterNavLink key={uuid()} text={item} />
                                    </ErrorBoundary>
                                )
                            }) }
                        </ul>
                    </nav>
                </div>
            </section>
        </footer>
    )
}

export default Footer