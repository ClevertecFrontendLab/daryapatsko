import Modal from 'antd/lib/modal/Modal';
import './ChangePassword.css';
import { Button, Form, Input } from 'antd';
import { useChangePasswordMutation } from '@redux/commonApi';
import { history } from '@redux/configure-store';
import { Paths } from './../../../routes/path';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const ChangePassword = () => {
    const [changePassword, { isError }] = useChangePasswordMutation();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const location = useLocation();
    const onFinish = async (values: any) => {
        const { password, confirmPassword } = values;
        await changePassword({ password, confirmPassword })
            .unwrap()
            .then((res) => {
                history.push(`${Paths.RESULT}/${Paths.SUCCESS_CHANGE_PASSWORD}`);
            })
            .catch((err) => {
                history.push(`${Paths.RESULT}/${Paths.ERROR_CHANGE_PASSWORD}`);
            });
    };
    console.log(password);
    console.log(confirmPassword);
    useEffect(() => {
        if (location.state?.state?.from === '/result/error-change-password'){
            onFinish({password, confirmPassword})
        }
    },[location])
    return (
        <Modal
            open={true}
            closable={false}
            // okText={<span  data-test-id='change-submit-button'>Сохранить</span>}
            cancelText={false}
            // onOk={onFinish}
            width={'539px'}
            centered={true}
            style={{ height: '419px' }}
        >
            <p className='title_modal title_change-password'>Восстановление аккауанта</p>
            <Form
                name='basic'
                onFinish={onFinish}
                initialValues={{ remember: true }}
                autoComplete='off'
                style={{
                    width: '368px',
                    marginBottom: '30px',
                    textAlign: 'left',
                }}
            >
                <Form.Item
                    name='password'
                    help='Пароль не менее 8 символов, с заглавной буквы и цифрой'
                    rules={[
                        { required: true },
                        {
                            pattern: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                        },
                    ]}
                >
                    <Input.Password
                        placeholder='Новый пароль'
                        // onChange={passwordChange}
                        data-test-id='change-password'
                    />
                </Form.Item>

                <Form.Item
                    name='confirmPassword'
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
                        // onChange={confirmPasswordChange}
                        data-test-id='change-confirm-password'
                    />
                </Form.Item>
                <Button type='primary' htmlType='submit'>
                    Сохранить
                </Button>
            </Form>
        </Modal>
    );
};
