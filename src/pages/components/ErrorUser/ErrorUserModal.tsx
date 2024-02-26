import './ErrorUserModal.css';
import errorUser from './../../../assets/registration/errorUser.svg';
import Modal from 'antd/lib/modal';
import { history } from '@redux/configure-store';

export const ErrorUser = () => {
    return (
        <Modal
            open={true}
            closable={false}
            okText={<span data-test-id='registration-back-button'
            >Назад к регистрации</span>}
            cancelText={false}
            onOk={() => history.push('/auth/registration')}
            width={'539px'}
            centered={true}
        >
            <img src={errorUser} alt='error' />
            <div className='description_modal description_success'>
                <p className='title_modal'>Данные не сохранились</p>
                <p className='text_modal'>
                    Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому
                    e-mail.
                </p>
            </div>
        </Modal>
    );
};
