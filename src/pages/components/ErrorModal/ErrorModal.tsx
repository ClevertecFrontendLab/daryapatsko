import Modal from 'antd/lib/modal';
import './errorModal.css';
import errorIcon from '../../../assets/registration/error.svg';
import { history } from '@redux/configure-store';
import { useWindowSize } from 'usehooks-ts';
import { Paths } from './../../../routes/path';

const ErrorModal = () => {
    const windowSize = useWindowSize();
    const modalWidth = windowSize.width < 450 ? '328px' : '539px';
    return (
        <Modal
            open={true}
            closable={false}
            okText={<span data-test-id='login-retry-button'>Повторить</span>}
            cancelText={false}
            onOk={() => history.push(Paths.AUTH_LOGIN)}
            width={modalWidth}
            centered={true}
        >
            <img src={errorIcon} alt='error' style={{ paddingTop: '5px' }} />
            <div className='description_modal'>
                <p className='title_modal'>Вход не выполнен</p>
                <p className='text_modal'>Что-то пошло не так. Попробуйте еще раз</p>
            </div>
        </Modal>
    );
};

export default ErrorModal;
