const validateText = (text) => {
    return /^[a-zA-Z- ]{3,}$/i.test(text)
}

export default validateText