const validateMessage = (message) => {
    return /^(?=.*[A-Za-z]{3,}).{3,}$/i.test(message)
}

export default validateMessage