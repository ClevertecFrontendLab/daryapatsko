import { Modal } from 'antd';
import { history } from '@redux/configure-store';
import successIcon from './../../../assets/registration/successIcon.svg';
import './successChangePassword.css';
import { useWindowSize } from 'usehooks-ts';

export const SuccessChangePassword = () => {
    const windowSize = useWindowSize();
    const modalWidth = windowSize.width < 450 ? '328px' : '539px';
    return (
        <Modal
            open={true}
            closable={false}
            okText={<span data-test-id='change-entry-button'>Вход</span>}
            cancelText={false}
            onOk={() => history.push('/auth')}
            width={modalWidth}
            centered={true}
        >
            <img src={successIcon} alt='success' />
            <div className='description_modal'>
                <p className='title_modal'>Пароль успешно изменен</p>
                <p className='text_modal text_password_success'>
                    Теперь можно войти в аккаунт, используя <br /> свой логин и новый пароль
                </p>
            </div>
        </Modal>
    );
};
