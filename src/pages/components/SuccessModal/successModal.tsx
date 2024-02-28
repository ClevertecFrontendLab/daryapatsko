import Modal from 'antd/lib/modal';
import './successModal.css';
import successIcon from './../../../assets/registration/successIcon.svg';
import { history } from '@redux/configure-store';
import { useWindowSize } from 'usehooks-ts';
import {Paths} from './../../../routes/path'

export const SuccessModal = () => {
    const windowSize = useWindowSize()
    const modalWidth = windowSize.width < 450 ? '328px' : '539px'
    return (
        <Modal
            open={true}
            closable={false}
            okText={<span data-test-id='registration-enter-button'
            >Войти</span>}
            cancelText={false}
            onOk={() => history.push(Paths.AUTH_lOGIN) }
            width={modalWidth}
            centered={true}
        >
            <img src={successIcon} alt='success' style={{paddingTop: '5px'}} />
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
