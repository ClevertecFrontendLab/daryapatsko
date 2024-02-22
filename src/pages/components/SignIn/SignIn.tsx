import './SignIn.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthLoginMutation } from '@redux/commonApi';
import { Paths } from './../../../routes/path';
import googleIcon from './../../../assets/registration/googleIcon.svg';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import { GooglePlusOutlined } from '@ant-design/icons';

export const SignIn: React.FC = () => {
    const navigate = useNavigate()
    const [auth, { isLoading,isSuccess }]  = useAuthLoginMutation();

    const onFinish = async (values: any) => {
        auth({ email: values.email, password: values.password })
        .unwrap()
        .then((res) => {
            values.remember ? localStorage.setItem('token', res.accessToken) : sessionStorage.setItem('token', res.accessToken);
           
        }).catch((err)=>{
           err && navigate(`${Paths.RESULT}/${Paths.ERROR_LOGIN}`)
        });
      };
      useEffect(()=>{
        isSuccess &&  navigate(`${Paths.MAIN}`)
      },[isSuccess])
    

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
            <Form.Item className='form_option'>
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
                <GooglePlusOutlined style={{marginTop: '4px'}} />
                Войти через Google
            </Button>
        </Form>
        </>
    );
};
