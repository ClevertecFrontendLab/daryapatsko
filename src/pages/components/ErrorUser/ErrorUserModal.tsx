import './ErrorUserModal.css';
import errorUser from './../../../assets/registration/errorUser.svg';
import Modal from 'antd/lib/modal';
import { history } from '@redux/configure-store';
import { useWindowSize } from 'usehooks-ts';

export const ErrorUser = () => {
    const windowSize = useWindowSize();
    const modalWidth = windowSize.width < 450 ? '328px' : '539px';
    return (
        <Modal
            open={true}
            closable={false}
            okText={<span data-test-id='registration-back-button'>Назад к регистрации</span>}
            cancelText={false}
            onOk={() => history.push('/auth/registration')}
            width={modalWidth}
            centered={true}
        >
            <img src={errorUser} alt='error' />
            <div className='description_modal'>
                <p className='title_modal'>Данные не сохранились</p>
                <p className='text_modal'>
                    Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому
                    e-mail.
                </p>
            </div>
        </Modal>
    );
};
