import Modal from 'antd/lib/modal';
import './successModal.css';
import successIcon from './../../../assets/registration/successIcon.svg';
import { history } from '@redux/configure-store';

export const SuccessModal = () => {
    return (
        <Modal
            open={true}
            closable={false}
            okText={'Войти'}
            cancelText={false}
            onOk={() => history.push('/auth') }
            width={'539px'}
            centered={true}
        >
            <img src={successIcon} alt='error' />
            <div className='description_modal description_success' >
                <p className='title_modal'>Регистрация успешна</p>
                <p className='text_modal text_modal_success'>
                    Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и
                    пароль.
                </p>
            </div>
        </Modal>
    );
};
