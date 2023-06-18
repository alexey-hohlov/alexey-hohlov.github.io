import { FormProvider, useForm } from 'react-hook-form';
import { validations } from './validations';
import { defaultValues } from './defaultValues';
import { Button, Input, TextArea } from '../../components';
import emailjs from '@emailjs/browser';
import styles from './Form.module.scss';
import { forwardRef } from 'react';

type Ref = HTMLFormElement;

const Form = forwardRef<Ref>((props, ref) => {
    const methods = useForm({ mode: 'onSubmit', defaultValues });

    const onSubmit = methods.handleSubmit(data => {
        emailjs
            .send(
                'service_f64d5z9',
                'template_02urki4',
                data,
                'p6jWYzNc2SUeOsgSH'
            )
            .then(
                function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                },
                function (error) {
                    console.log('FAILED...', error);
                }
            );
    });

    return (
        <FormProvider {...methods}>
            <form className={styles.form} ref={ref}>
                <div className={styles.inputs}>
                    <Input
                        placeholder={'Email'}
                        name={'email'}
                        validations={validations.email}
                    />
                    <Input
                        placeholder={'Как вас зовут?'}
                        name={'name'}
                        validations={validations.name}
                    />
                    <TextArea
                        placeholder={'Ваше сообщение'}
                        name={'text'}
                        validations={validations.text}
                    />
                </div>
                <Button title={'Отправить'} onClick={onSubmit} color={'teal'} />
            </form>
        </FormProvider>
    );
});

export default Form;
