import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import './SignIn.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SIGN_IN } from '@redux/SignInSlice';
import { useEffect } from 'react';
import { useAuthMutation } from '@redux/commonApi';
import Loader from '../Loader/Loader';

export const SignIn: React.FC = () => {
    const [auth, { isLoading}]  = useAuthMutation();

    const onFinish = async (values: any) => {
        console.log(123)
        // auth({ email: values.email, password: values.password })
        // .unwrap()
        // .then((res) => {
        //     console.log(res)
        //     // values.remember ? localStorage.setItem('token', res.accessToken) : sessionStorage.setItem('token', res.accessToken);
           
        // }).catch();
        console.log('Received values of form: ', values);
      };

    return (
        <>
        {/* {isLoading && <Loader />} */}
        <Form
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item id='email-input' name='email' rules={[{ required: true, message: '' }]}>
                <Input addonBefore='e-mail' />
            </Form.Item>

            <Form.Item name='password' rules={[{ required: true,
            message: 'Пароль не менее 8 символов, с заглавной буквы и цифрой' },
            {
                pattern: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
            }]}>
                <Input.Password placeholder='Пароль' />
            </Form.Item>
            <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Link className='login-form-forgot'  to={'/'}>
                    Забыли пароль?
                </Link>
            </Form.Item>

            <Button type='primary' htmlType='submit' className='login-form-button'>
                Войти
            </Button>
            <Button type='primary' htmlType='submit' className='google-form-button'>
                Войти через Google
            </Button>
        </Form>
        </>
    );
};
