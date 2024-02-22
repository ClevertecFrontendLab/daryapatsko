import './SignUp.css';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import { useAuthRegistationMutation } from '@redux/commonApi';
import { Paths } from './../../../routes/path';
import { GooglePlusOutlined } from '@ant-design/icons';

export const SignUp: React.FC = () => {
    const dispatch = useDispatch<ThunkDispatch<any, object, AnyAction>>();
    const [authRegistation, { isLoading, isSuccess }] = useAuthRegistationMutation()
    const navigate = useNavigate();
    const [form] = useForm()
    console.log(form)
    
    const onFinish = async (values: any) => {
        const {email, password} = values
        await authRegistation({email,password})
        .unwrap()
        .catch((err) => {
            if(err.status === 409){
                navigate(`${Paths.RESULT}/${Paths.ERROR_CHECK}`)
            }else{
                navigate(`${Paths.RESULT}/${Paths.ERROR}`)
            }
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        form.resetFields()
        console.log('Failed:', errorInfo);
    };
    if(isSuccess){
        navigate(`${Paths.RESULT}/${Paths.SUCCESS}`)
    }

    return (
        <Form
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
<div className="btn_box">
<Button type='primary' htmlType='submit' className='login-form-button'>
                Войти
            </Button>
            <Button type='primary' htmlType='submit' className='google-form-button'>
                <GooglePlusOutlined style={{marginTop: '4px'}}/>
                Регистрация через Google
            </Button>
</div>
            
        </Form>
    );
};
