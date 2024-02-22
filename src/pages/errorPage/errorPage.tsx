import './errorPage.css';
import { ResultScreen } from '@pages/components/ResultScreen';
import errorIcon from '../../assets/registration/error.svg';
import Modal from 'antd/lib/modal/Modal';

export const ErrorPage = () => {
    return (
        <ResultScreen>
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
                <div className="description_modal">
                  <p className='title_modal'>Вход не выполнен</p>
                  <p className='text_modal'>Что-то пошло не так. Попробуйте еще раз</p>
                </div>
                
            </Modal>
        </ResultScreen>
    );
};
