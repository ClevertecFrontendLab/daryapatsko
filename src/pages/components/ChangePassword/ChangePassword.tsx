import Modal from 'antd/lib/modal/Modal';
import './ChangePassword.css';
import { Button, Form, Input } from 'antd';
import { useChangePasswordMutation } from '@redux/commonApi';
import { history } from '@redux/configure-store';
import { Paths } from './../../../routes/path';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '@redux/LoadingSlice';
import { useWindowSize } from 'usehooks-ts';
import { VALID_RULES_PASSWORD } from '@constants/constAuth';

export const ChangePassword = () => {
    const windowSize = useWindowSize();
    const modalWidth = windowSize.width < 450 ? '328px' : '539px';
    const inputWidth = windowSize.width < 450 ? '296px' : '368px';

    const dispatch = useDispatch();
    const [changePassword] = useChangePasswordMutation();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const location = useLocation();

    const onFinish = async (values: any) => {
        dispatch(setLoading());
        const { password, confirmPassword } = values;
        await changePassword({ password, confirmPassword })
            .unwrap()
            .then(() => {
                history.push(`${Paths.RESULT}/${Paths.SUCCESS_CHANGE_PASSWORD}`);
            })
            .catch((err) => {
                setPassword(password);
                setConfirmPassword(confirmPassword);
                history.push(`${Paths.RESULT}/${Paths.ERROR_CHANGE_PASSWORD}`);
            })
            .finally(() => {
                dispatch(setLoading());
            });
    };

    useEffect(() => {
        if (location.state?.state?.from === `${Paths.RESULT}/${Paths.ERROR_CHANGE_PASSWORD}`) {
            onFinish({ password, confirmPassword });
        }
    }, [location]);

    return (
        <Modal
            open={true}
            closable={false}
            okButtonProps={{ className: 'changeButton' }}
            cancelText={false}
            width={modalWidth}
            centered={true}
        >
            <p className='title_modal title_change-password'>Восстановление аккауанта</p>
            <Form
                name='basic'
                onFinish={onFinish}
                initialValues={{ remember: true }}
                autoComplete='off'
                style={{
                    width: `${inputWidth}`,
                    marginBottom: '30px',
                    textAlign: 'left',
                }}
            >
                <Form.Item
                    name='password'
                    help='Пароль не менее 8 символов, с заглавной буквы и цифрой'
                    rules={[VALID_RULES_PASSWORD]}
                >
                    <Input.Password placeholder='Новый пароль' data-test-id='change-password' />
                </Form.Item>

                <Form.Item
                    name='confirmPassword'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
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
                        data-test-id='change-confirm-password'
                    />
                </Form.Item>
                <Button
                    className='saveBtn'
                    type='primary'
                    htmlType='submit'
                    data-test-id='change-submit-button'
                >
                    Сохранить
                </Button>
            </Form>
        </Modal>
    );
};
