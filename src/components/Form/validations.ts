const errorMessage = 'Заполните это поле';

export const validations = {
    name: {
        required: errorMessage,
    },
    email: {
        required: errorMessage,
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Некорректный формат email',
        },
    },
    text: {
        required: errorMessage,
        minLength: {
            value: 5,
            message: 'Минимальная длина сообщения - 10 символов'
        },
    },
};
