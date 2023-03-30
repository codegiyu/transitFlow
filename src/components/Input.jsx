import { useState } from "react"

export const InputLight = (props) => {
    const { type, placeholder, value, changeHandler, hasError } = props.inputProps

    const [isFocused, setIsFocused] = useState(false)

    let borderColor = hasError ? "border-red-500" : isFocused ? "border-white" : "border-[#4E5683]"

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)

    const handleChange = (e) => {
        changeHandler(e)
    }

    return (
        <input type={ type } onChange={ handleChange } value={ value } placeholder={ placeholder }
            onFocus={ handleFocus } onBlur={ handleBlur } onMouseEnter={ handleFocus }
            onMouseLeave={ handleBlur } required
            className={`w-full border ${borderColor} font-spartan text-xl leading-5 text-white
            placeholder:text-white px-[1.875rem] py-[1.3125rem] bg-transparent outline-none rounded-none`}
        />
    )
}

export const InputDark = (props) => {
    const { type, placeholder, value, changeHandler, hasError } = props.inputProps

    const [isFocused, setIsFocused] = useState(false)

    let borderColor = hasError ? "border-red-500" : isFocused ? "border-white" : "border-[#4E5683]"

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)

    const handleChange = (e) => {
        changeHandler(e)
    }

    return (
        <input type={ type } onChange={ handleChange } value={ value } placeholder={ placeholder }
            onFocus={ handleFocus } onBlur={ handleBlur } onMouseEnter={ handleFocus }
            onMouseLeave={ handleBlur } required
            className={`w-full border ${borderColor} font-spartan text-xl leading-5 text-white
            placeholder:text-[#999999] px-[1.875rem] py-[1.3125rem] bg-transparent outline-none rounded-none`}
        />
    )
}