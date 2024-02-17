import './SignUp.css';
import { Button, Form, Input } from 'antd';

export const SignUp: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item id='email-input' name='email' rules={[{ required: true }]}>
                <Input prefix={<div className='site-form-item-icon'>e-mail:</div>} />
            </Form.Item>

            <Form.Item
            className='password-box'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <div className='input_box'>
                    <Input.Password placeholder='Пароль' />
                    <span className='span-password'>Пароль не менее 8 символов, с заглавной буквы и цифрой</span>
                </div>
            </Form.Item>

            <Form.Item
                name='confirm'
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error('The two passwords that you entered do not match!'),
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
