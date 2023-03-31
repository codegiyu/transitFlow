import { InputLight } from "./Input";
import { TextArea } from "./Input";
import { ButtonGoldNormal } from "./Button";
import { useEffect, useState } from "react";
import helpers from "../helpers";
import ErrorBoundary from "./ErrorBoundary";
import uuid from "react-uuid";

const ContactForm = () => {
    const [inputValues, setInputValues] = useState({ 
        name: "", email: "", phone: "", city: "", message: "Your Message*"
    })
    const [hasError, setHasError] = useState({ 
        name: false, email: false, phone: false, city: false, message: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const changeHandler = (e) => {
        const value = e.target.value, name = e.target.name

        try {
            setInputValues((prevState) => {
                return { ...prevState, [name]: value }
            })

            if (name === "email") {
                if (!helpers.validateEmail(value)) throw new Error("invalid")
            } else if (name === "name" || name === "city") {
                if (!helpers.validateText(value)) throw new Error("invalid")
            } else if (name === "phone") {
                if (!helpers.validatePhone(value)) throw new Error("invalid")
            } else if (name === "message") {
                if (!helpers.validateMessage(value)) throw new Error("invalid")
            }

            setHasError((prevState) => {
                return { ...prevState, [name]: false }
            })
        } catch (err) {
            if (err.message === "invalid") {
                setHasError((prevState) => {
                    return { ...prevState, [name]: true }
                })
            }
        }
    }

    const clickHandler = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            if (!helpers.allFieldsAreErrorFree(hasError)) {
                setIsSubmitting(false)
                e.target.textContent = "Message not sent!"

                setTimeout(() => {
                    e.target.textContent = "Send Message"
                }, 2500)
            } else {
                setInputValues({ name: "", email: "", phone: "", city: "", message: "Your Message*" })
                setIsSubmitting(false)
            }
        }, 2500)
    }

    useEffect(() => {
        if (isSubmitting) setDisabled(true)
        else setDisabled(false)
    }, [isSubmitting])

    const nameProps = {
        type: "text",
        placeholder: "Your Name*",
        name: "name",
        value: inputValues.name,
        changeHandler,
        hasError: hasError.name
    }

    const emailProps = {
        type: "email",
        placeholder: "Email*",
        name: "email",
        value: inputValues.email,
        changeHandler,
        hasError: hasError.email
    }

    const phoneProps = {
        type: "text",
        placeholder: "Phone Number*",
        name: "phone",
        value: inputValues.phone,
        changeHandler,
        hasError: hasError.phone
    }

    const cityProps = {
        type: "text",
        placeholder: "City*",
        name: "city",
        value: inputValues.city,
        changeHandler,
        hasError: hasError.city
    }

    const messageProps = {
        name: "message",
        value: inputValues.message,
        changeHandler,
        hasError: hasError.message
    }

    const submitBtn = {
        text: isSubmitting ? "Sending Message..." : "Send Message",
        type: "submit",
        disabled,
        clickHandler
    }

    const inputsArr = [nameProps, emailProps, phoneProps, cityProps]

    return (
        <form className="">
            <div className="w-full grid grid-cols-2 gap-[1.875rem] mb-[1.875rem]">
                { inputsArr.map(item => {
                    return (
                        <ErrorBoundary key={uuid()}>
                            <InputLight key={uuid()} inputProps={ item } />
                        </ErrorBoundary>
                    )
                }) }
            </div>
            <ErrorBoundary>
                <TextArea inputProps={ messageProps } />
            </ErrorBoundary>
            <div className="w-full flex mt-[1.875rem]">
                <ErrorBoundary>
                    <ButtonGoldNormal btnProps={ submitBtn } />
                </ErrorBoundary>
            </div>
        </form>
    )
}

export default ContactForm