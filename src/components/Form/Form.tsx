import { FormProvider, useForm } from 'react-hook-form';
import { validations } from './validations';
import { defaultValues } from './defaultValues';
import { Button, Input, TextArea } from '../../components';
import emailjs from '@emailjs/browser';
import styles from './Form.module.scss';
import { forwardRef } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { emailSlice } from '../../store/reducers/emailReducer';
import { IEmailForm } from '../../types/formTypes';

type Ref = HTMLFormElement;

const Form = forwardRef<Ref>((props, ref) => {
    const methods = useForm({ mode: 'onSubmit', defaultValues });

    const { setPopup, setEmailStatus } = emailSlice.actions;
    const dispatch = useAppDispatch();

    const sendEmail = async (data: IEmailForm) => {
        //copying array to avoid type redefinition
        //emailjs wants Record<string, unknown> for template params
        const template_params = { ...data };

        dispatch(setPopup(true));
        dispatch(setEmailStatus('loading'));
        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                template_params,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );
            dispatch(setEmailStatus('success'));
            methods.reset();
            setTimeout(() => {
                dispatch(setEmailStatus(''));
                dispatch(setPopup(false));
            }, 1500);
        } catch (error) {
            console.log(error);
            dispatch(setEmailStatus('error'));
            setTimeout(() => {
                dispatch(setEmailStatus(''));
                dispatch(setPopup(false));
            }, 1500);
        }
    };

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
                        name={'message'}
                        validations={validations.message}
                    />
                </div>
                <Button
                    title={'Отправить'}
                    onClick={methods.handleSubmit(sendEmail)}
                    color={'teal'}
                />
            </form>
        </FormProvider>
    );
});

export default Form;
