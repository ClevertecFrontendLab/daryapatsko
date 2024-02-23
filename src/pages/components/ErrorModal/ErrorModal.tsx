import Modal from 'antd/lib/modal';
import './errorModal.css';
import errorIcon from '../../../assets/registration/error.svg';

const ErrorModal = () => {
    return (
        <Modal
            open={true}
            closable={false}
            okText={'Повторить'}
            cancelText={false}
            onOk={() => console.log(132)}
            width={'539px'}
            centered={true}
        >
            <img src={errorIcon} alt='error' />
            <div className='description_modal'>
                <p className='title_modal'>Вход не выполнен</p>
                <p className='text_modal'>Что-то пошло не так. Попробуйте еще раз</p>
            </div>
        </Modal>
    );
};

export default ErrorModal;
