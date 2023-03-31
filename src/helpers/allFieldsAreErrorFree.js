const allFieldsAreErrorFree = (obj) => {
    return Object.values(obj).every(field => field === false)
}

export default allFieldsAreErrorFree