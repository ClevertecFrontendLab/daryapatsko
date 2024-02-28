const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const patternPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
export const validateEmail = (email: string) => {
    return email !== '' && patternEmail.test(email);
};

export const STATUS_404 = 404;
export const STATUS_409 = 409;

export const VALID_RULES_EMAIL = {
    pattern: patternEmail,
    message: '',
};

export const VALID_RULES_PASSWORD = {
    pattern: patternPassword,
    message: 'Пароль не менее 8 символов, с заглавной буквы и цифрой',
};


