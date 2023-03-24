export const validEmailFormat = (email: string) => {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(email)
}

export const validNameFormat = (name: string) => {
    const regex = new RegExp(/^[a-zA-Z ]{2,30}$/)
    return regex.test(name)
}

export const validPasswordFormat = (password: string) => {
    const regex = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/)
    return regex.test(password)
}

export const validPhoneNumberFormat = (phoneNumber: string | number) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    return regex.test(phoneNumber.toString())
}