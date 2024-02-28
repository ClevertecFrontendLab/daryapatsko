import './SignIn.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { useAuthLoginMutation } from '@redux/commonApi';
import { useCheckEmailMutation } from '@redux/commonApi';
import { Paths } from './../../../routes/path';
import { useEffect, useState } from 'react';
import { GooglePlusOutlined } from '@ant-design/icons';
import { setUser } from '@redux/userSlice';
import { useDispatch } from 'react-redux';
import { history } from '@redux/configure-store';
import { setLoading } from '@redux/LoadingSlice';
import { useLocation } from 'react-router-dom';

export const SignIn: React.FC = () => {
    const location = useLocation();
    // const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [auth] = useAuthLoginMutation();
    const [checkEmail] = useCheckEmailMutation();
    const [refreshPage, setRefreshPage] = useState(false);

    const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setEmail(email);
        setIsEmailValid(!validateEmail(email));
    };
    const validateEmail = (email: string) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return email !== '' && pattern.test(email);
    };

    const onFinish = async (values: any) => {
        dispatch(setUser({ email: values.email, password: values.password }));
        dispatch(setLoading());
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
            })
            .finally(() => {
                dispatch(setLoading());
            });
    };

    const handleForgotPassword = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (email === '') {
            return;
        }
        e.preventDefault();
        dispatch(setLoading());
        dispatch(setUser({ email }));
        checkEmail({ email })
            .unwrap()
            .then(() => history.push(`${Paths.AUTH_lOGIN}/${Paths.AUTH_CONFIRM}`))
            .catch((err) => {
                if (err.status === 404 && err.data.message === 'Email не найден') {
                    history.push(`${Paths.RESULT}/${Paths.ERROR_CHECK}`);
                } else {
                    history.push(`${Paths.RESULT}/${Paths.ERROR_CHECK_EMAIL}`);
                }
            })
            .finally(() => {
                dispatch(setLoading());
            });
    };
    useEffect(() => {
        if (refreshPage) {
            window.location.reload();
        }
        // if (token) {
        //     history.push(Paths.MAIN);
        // }
        if (location.state?.state?.from === '/result/error-check-email') {
            checkEmail({ email })
                .unwrap()
                .then(() => history.push(`${Paths.AUTH_lOGIN}/${Paths.AUTH_CONFIRM}`))
                .catch((err) => {
                    if (err.status === 404 && err.data.message === 'Email не найден') {
                        history.push(`${Paths.RESULT}/${Paths.ERROR_CHECK}`);
                    } else {
                        history.push(`${Paths.RESULT}/${Paths.ERROR_CHECK_EMAIL}`);
                    }
                });
        }
    }, [refreshPage, location]);

    return (
        <div className='form_signIn'>
            <Form
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete='off'
                className=''
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
                    <Input addonBefore='e-mail' onChange={emailChange} data-test-id='login-email' />
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
                    <Input.Password placeholder='Пароль' data-test-id='login-password' />
                </Form.Item>
                <Form.Item className='form_option'>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                        <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                    </Form.Item>

                    <button
                        type='submit'
                        className='login-form-forgot'
                        data-test-id='login-forgot-button'
                        disabled={isEmailValid}
                        onClick={handleForgotPassword}
                    >
                        Забыли пароль?
                    </button>
                </Form.Item>

                <Button
                    type='primary'
                    htmlType='submit'
                    className='login-form-button'
                    data-test-id='login-submit-button'
                >
                    Войти
                </Button>
                <Button type='primary' htmlType='submit' className='google-form-button'>
                    <GooglePlusOutlined style={{ marginTop: '4px' }} />
                    <span>Войти через Google</span>
                </Button>
            </Form>
        </div>
    );
};
