import './SignIn.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { useAuthLoginMutation } from '@redux/commonApi';
import { Paths } from './../../../routes/path';
import { useState } from 'react';
import { GooglePlusOutlined } from '@ant-design/icons';
import { setUser } from '@redux/userSlice';
import { useDispatch } from 'react-redux';
import { history } from '@redux/configure-store';
import Loader from '../Loader/Loader';

export const SignIn: React.FC = () => {
    const dispatch = useDispatch();
    const [isEmailValid, setIsEmailValid] = useState(false);
    console.log(isEmailValid);

    const [auth, { isLoading, isSuccess }] = useAuthLoginMutation();
    const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        console.log(email)
        setIsEmailValid(!validateEmail(email));
    };
    const validateEmail = (email: string) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const onFinish = async (values: any) => {
        dispatch(setUser({ email: values.email, password: values.password }));
        auth({ email: values.email, password: values.password })
            .unwrap()
            .then((res) => {
                values.remember
                    ? localStorage.setItem('token', res.accessToken)
                    : sessionStorage.setItem('token', res.accessToken);
                    history.push(`${Paths.MAIN}`);
            })
            .catch((err) => {
                if (err) {
                    history.push(`${Paths.RESULT}/${Paths.ERROR_LOGIN}`);
                }
            });
    };
    // useEffect(() => {
        
    // }, [ history]);

    return (
        <>
            {isLoading && <Loader />}
            <Form
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete='off'
            >
                <Form.Item
                    id='email-input'
                    name='email'
                    rules={[
                        { required: true, message: '' },
                        {
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: '',
                        },
                    ]}
                >
                    <Input addonBefore='e-mail' onChange={emailChange} />
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Пароль не менее 8 символов, с заглавной буквы и цифрой',
                        },
                        {
                            pattern: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                            message: '',
                        },
                    ]}
                >
                    <Input.Password placeholder='Пароль' />
                </Form.Item>
                <Form.Item className='form_option'>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <button
                        className='login-form-forgot'
                        disabled={isEmailValid}
                        // onClick={() => history.push(`${Paths.RESULT}/${Paths.FORGOT_PASSWORD}`)}
                    >
                        Забыли пароль?
                    </button>
                </Form.Item>

                <Button type='primary' htmlType='submit' className='login-form-button'>
                    Войти
                </Button>
                <Button type='primary' htmlType='submit' className='google-form-button'>
                    <GooglePlusOutlined style={{ marginTop: '4px' }} />
                    Войти через Google
                </Button>
            </Form>
        </>
    );
};
