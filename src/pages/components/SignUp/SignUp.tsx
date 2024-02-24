import './SignUp.css';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import { useAuthRegistationMutation } from '@redux/commonApi';
import { Paths } from './../../../routes/path';
import { GooglePlusOutlined } from '@ant-design/icons';
import { history } from '@redux/configure-store';

export const SignUp: React.FC = () => {
    const [form] = useForm();
    const dispatch = useDispatch<ThunkDispatch<any, object, AnyAction>>();
    const [authRegistation, { isLoading, isSuccess }] = useAuthRegistationMutation();
    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        const { email, password } = values;
        await authRegistation({ email, password })
            .unwrap()
            .catch((err) => {
                if (err.status === 409) {
                    history.push(`${Paths.RESULT}/${Paths.ERROR_USER}`);
                } else {
                    history.push(`${Paths.RESULT}/${Paths.ERROR}`);
                }
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        form.resetFields();
        console.log('Failed:', errorInfo);
    };
    if (isSuccess) {
        history.push(`${Paths.RESULT}/${Paths.SUCCESS}`);
    }

    return (
        <Form
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            form={form}
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
                <Input addonBefore='e-mail' />
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
                            return Promise.reject(new Error('Пароли не совпадают'));
                        },
                    }),
                ]}
            >
                <Input.Password placeholder='Повторите пароль' />
            </Form.Item>
            <div className='btn_box'>
                <Button type='primary' htmlType='submit' className='login-form-button'>
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
