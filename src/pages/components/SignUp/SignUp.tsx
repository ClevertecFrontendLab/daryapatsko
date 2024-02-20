import './SignUp.css';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { CREATE_USER } from '@redux/SignUpSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SignUp: React.FC = () => {
    const dispatch = useDispatch<ThunkDispatch<any, object, AnyAction>>();
    const navigate = useNavigate();
    
    const onFinish = async (values: any) => {
        try {
        await dispatch(CREATE_USER(values, navigate))
        } catch (err) {
            console.log(err);
        }
    };

    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
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

            <Form.Item
                className='password-box'
                name='password'
                help='Пароль не менее 8 символов, с заглавной буквы и цифрой'
                rules={[{ required: true, 
                 },{
                    pattern: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                 }]}
                 
            >
                    <Input.Password placeholder='Пароль' />
                   
            </Form.Item>

            <Form.Item
                name='confirm'
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: '',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error('Пароли не совпадают'),
                            );
                        },
                    }),
                ]}
            >
                <Input.Password placeholder='Повторите пароль' />
            </Form.Item>

            <Button type='primary' htmlType='submit' className='login-form-button'>
                Войти
            </Button>
            <Button type='primary' htmlType='submit' className='google-form-button'>
                Войти через Google
            </Button>
        </Form>
    );
};
