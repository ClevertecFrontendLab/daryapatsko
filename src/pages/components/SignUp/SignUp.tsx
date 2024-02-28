import './SignUp.css';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useForm } from 'antd/lib/form/Form';
import { useAuthRegistationMutation } from '@redux/commonApi';
import { Paths } from './../../../routes/path';
import { GooglePlusOutlined } from '@ant-design/icons';
import { history } from '@redux/configure-store';
import { useEffect } from 'react';
import { setUser } from '@redux/userSlice';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setLoading } from '@redux/LoadingSlice';

export const SignUp: React.FC = () => {
    const location = useLocation();
    const [form] = useForm();
    const dispatch = useDispatch<ThunkDispatch<any, object, AnyAction>>();
    const [authRegistation] = useAuthRegistationMutation();
    const { email } = useAppSelector((state) => state.user);
    const { password } = useAppSelector((state) => state.user);

    const onFinish = async (values: any) => {
        dispatch(setLoading());
        const { email, password } = values;
        await authRegistation({ email, password })
            .unwrap()
            .then(() => history.push(`${Paths.RESULT}/${Paths.SUCCESS}`))
            .catch((err) => {
                if (err.status === 409) {
                    history.push(`${Paths.RESULT}/${Paths.ERROR_USER}`);
                } else {
                    dispatch(setUser({ email, password }));
                    history.push(`${Paths.RESULT}/${Paths.ERROR}`, {
                        state: { from: location.pathname },
                    });
                }
            })
            .finally(() => {
                dispatch(setLoading());
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        form.resetFields();
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        if (location.state?.state?.from === '/result/error') {
            onFinish({ email, password });
        }
    }, [location]);
    return (
        <Form
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            form={form}
            className='form_signUp'
        >
            <Form.Item
                style={{ marginBottom: '32px' }}
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
                <Input addonBefore='e-mail' data-test-id='registration-email' />
            </Form.Item>

            <Form.Item
                className='password-box'
                name='password'
                help='Пароль не менее 8 символов, с заглавной буквы и цифрой'
                rules={[
                    { required: true },
                    {
                        pattern: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                    },
                ]}
            >
                <Input.Password placeholder='Пароль' data-test-id='registration-password' />
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
                            return Promise.reject(new Error('Пароли не совпадают'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    placeholder='Повторите пароль'
                    data-test-id='registration-confirm-password'
                />
            </Form.Item>
            <div className='btn_box'>
                <Button
                    type='primary'
                    htmlType='submit'
                    className='login-form-button'
                    data-test-id='registration-submit-button'
                >
                    Войти
                </Button>
                <Button type='primary' htmlType='submit' className='google-form-button'>
                    <GooglePlusOutlined style={{ marginTop: '4px' }} />
                    Регистрация через Google
                </Button>
            </div>
        </Form>
    );
};
