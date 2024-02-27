import Modal from 'antd/lib/modal/Modal';
import './ConfirmPassword.css';
import VerificationInput from 'react-verification-input';
import attentionIcon from './../../../assets/registration/attention.svg';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/configure-store';
import { useState } from 'react';
import { useConfirmEmailMutation } from '@redux/commonApi';
import { history } from '@redux/configure-store';
import errorIcon from './../../../assets/registration/errorUser.svg'

export const ConfirmPassword = () => {
    const [value, setValue] = useState('')
    const [confirmEmail, {isError}] = useConfirmEmailMutation()
    const email = useSelector((state:RootState) => state.user.email)

    return (
        <Modal
            open={true}
            closable={false}
            okButtonProps={{ className: 'btnConfirm' }}
            width={'539px'}
            centered={true}
            style={{
                marginTop:'90px',
                maxHeight:'428px'
            }}
        >
            {isError ?  <img src={errorIcon} alt='error' /> :  <img src={attentionIcon} alt='attention' />}
            <div className='description_modal description_confirm'>
                <p className='title_modal'>
                    {isError ? 'Неверный код.' : ''}
                    Введите код <br/> для восстановления аккауанта</p>
                <p className='text_modal text_check'>
                    Мы отправили вам на e-mail 
                    <span> {email} </span>
                    шестизначный код. Введите его в
                    поле ниже.
                </p>
                <VerificationInput
                data-test-id='verification-input'
                value={value}
                onChange={(data) => {
                    setValue(data)
                }}
                onComplete={(code:string)=>{
                    if(code.length === 6){
                        confirmEmail({email, code})
                        .unwrap()
                        .then((res)=>{
                            history.push('/auth/change-password')
                        })
                        .catch((err)=> {
                           setValue('')
                        } )
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
