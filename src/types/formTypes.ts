export interface IEmailForm {
    email: string;
    name: string;
    message: string;
}

export interface IValidations {
    required: string;
    minLength?: {
        value: number;
        message: string;
    };
    pattern?: {
        value: RegExp;
        message: string;
    };
}
