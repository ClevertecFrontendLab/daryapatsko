export  const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const patternPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
export const validateEmail = (email: string) => {
    return email !== '' && patternEmail.test(email);
};

export const STATUS_404 = 404;
export const STATUS_409 = 409;

