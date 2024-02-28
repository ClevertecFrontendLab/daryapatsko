import Modal from 'antd/lib/modal/Modal';
import './ConfirmPassword.css';
import VerificationInput from 'react-verification-input';
import attentionIcon from './../../../assets/registration/attention.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/configure-store';
import { useState } from 'react';
import { useConfirmEmailMutation } from '@redux/commonApi';
import { history } from '@redux/configure-store';
import errorIcon from './../../../assets/registration/errorUser.svg';
import { setLoading } from '@redux/LoadingSlice';
import { useWindowSize } from 'usehooks-ts';
import { Paths } from './../../../routes/path';

export const ConfirmPassword = () => {
    const [value, setValue] = useState('');
    const [confirmEmail, { isError }] = useConfirmEmailMutation();
    const email = useSelector((state: RootState) => state.user.email);
    const dispatch = useDispatch();
    const windowSize = useWindowSize();
    const modalWidth = windowSize.width < 450 ? '328px' : '539px';

    return (
        <Modal
            open={true}
            closable={false}
            okButtonProps={{ className: 'btnConfirm' }}
            width={modalWidth}
            centered={true}
            style={{
                marginTop: '90px',
            }}
        >
            {isError ? (
                <img src={errorIcon} alt='error' />
            ) : (
                <img src={attentionIcon} alt='attention' />
            )}
            <div className='description_modal description_confirm'>
                <p className='title_modal'>
                    {isError ? 'Неверный код.' : ''}
                    Введите код <br /> для восстановления аккауанта
                </p>
                <p className='text_modal text_check'>
                    Мы отправили вам на e-mail
                    <span> {email} </span>
                    шестизначный код. Введите его в поле ниже.
                </p>
                <VerificationInput
                    value={value}
                    onChange={(data) => {
                        setValue(data);
                    }}
                    onComplete={(code: string) => {
                        dispatch(setLoading());
                        if (code.length === 6) {
                            confirmEmail({ email, code })
                                .unwrap()
                                .then((res) => {
                                    history.push(
                                        `${Paths.AUTH_lOGIN}/${Paths.AUTH_CHANGE_PASSWORD}`,
                                    );
                                })
                                .catch((err) => {
                                    setValue('');
                                })
                                .finally(() => {
                                    dispatch(setLoading());
                                });
                        }
                    }}
                    inputProps={{
                        'data-test-id': 'verification-input',
                    }}
                    placeholder=''
                    classNames={{
                        container: 'container_code',
                        character: !isError ? 'character' : 'character-error',
                        characterInactive: 'character--inactive',
                        characterSelected: 'character--selected',
                        characterFilled: 'character--filled',
                    }}
                />
                <span className='subtitle'>Не пришло письмо? Проверьте папку Спам.</span>
            </div>
        </Modal>
    );
};
