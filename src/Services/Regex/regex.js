//Regex
const emailValidation = email => {
    const emailValid = '^[a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\d]+([\.\-_+][a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\d]+)*@[a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\d]+([\.\-][a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\d]+)*\.[a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF]{2,}$'
    const regexValidation = new RegExp(emailValid)
    return regexValidation;
}

const passwordValidation = password => {
    const isValid = '^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){5,16}$';
    return isValid;
}

//forms validation

const emailNullValid = (email) => {

    const isValid = email === '' || email === null || email === undefined

    return isValid;
}

const passdNullValid = (password) => {

    const isValid = password === '' || password === null || password === undefined

    return isValid;
}

export { emailValidation, passwordValidation, emailNullValid, passdNullValid }