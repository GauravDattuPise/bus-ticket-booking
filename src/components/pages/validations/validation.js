export function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
}

export const isValidPassword = (value) => { return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(value)); }

export const isValidName = (value) => { return (/^[a-z/\s/A-Z|.|,]+$/).test(value)}

export function isValidPhone(phone) {
    const re = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    return re.test(String(phone));
}