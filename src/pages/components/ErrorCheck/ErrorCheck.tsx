import Modal from 'antd/lib/modal';
import './ErrorCheck.css';
import errorUser from './../../../assets/registration/errorUser.svg';
import { history } from '@redux/configure-store';

export const ErrorCheck = () => {

    return (
        <Modal
            open={true}
            closable={false}
            okText={<span className='customButton' data-test-id='check-retry-button'
            >Попробовать снова</span>}
            cancelText={false}
            okButtonProps={{ className: 'customButton' }}
            onOk={() => history.push('/auth')}
            width={'539px'}
            centered={true}
        >
            <img src={errorUser} alt='error' />
            <div className='description_modal description_check'>
                <p className='title_modal title_check'>Такой e-mail не зарегистрирован</p>
                <p className='text_modal text_check'>
                    Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.
                </p>
            </div>
        </Modal>
    );
};
