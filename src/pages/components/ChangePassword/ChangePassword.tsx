import Modal from 'antd/lib/modal/Modal';
import './ChangePassword.css';
import { Form, Input } from 'antd';
import { useChangePasswordMutation } from '@redux/commonApi';
import { history } from '@redux/configure-store';

export const ChangePassword = () => {
    const [changePassword, {isError}] = useChangePasswordMutation()
    console.log(history)
    const onFinish = async (values: any) => {
        const { password, confirmPassword } = values;
        await changePassword({ password, confirmPassword })
            .unwrap()
            .then((res) => {
                history.push('/result/success-change-password')
            })
            .catch((err) => {
               history.push('/result/error-change-password')
            });
    };
    return (
        <Modal
            open={true}
            closable={false}
            okText={<span  data-test-id='change-submit-button'>Сохранить</span>}
            cancelText={false}
            onOk={onFinish}
            width={'539px'}
            centered={true}
            style={{height:'419px'}}
        >
            <p className='title_modal title_change-password'>Восстановление аккауанта</p>
            <Form
                name='basic'
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete='off'
                style={{
                    width:'368px',
                    marginBottom:'30px',
                    textAlign:'left',
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
                    <Input.Password placeholder='Новый пароль'  data-test-id='change-password'/>
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
                    <Input.Password placeholder='Повторите пароль' data-test-id='change-confirm-password'/>
                </Form.Item>
            </Form>
        </Modal>
    );
};
