export const validateEmail = (email: string) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return email !== '' && pattern.test(email);
};

export const STATUS_404 = 404;
export const STATUS_409 = 409;

