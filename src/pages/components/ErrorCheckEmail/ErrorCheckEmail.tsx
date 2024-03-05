import { Modal } from 'antd';
import './ErrorCheckEmail.css';
import { history } from '@redux/configure-store';
import errorCheckEmail from './../../../assets/registration/errorCheckEmail.svg';
import { Paths } from './../../../routes/path';

export const ErrorCheckEmail = () => {
    const onOk = () => {
        history.push(`${Paths.AUTH_LOGIN}`, { state: { from: location.pathname } });
    };
    return (
        <Modal
            open={true}
            closable={false}
            okText={
                <span className='customButton' data-test-id='check-back-button'>
                    Назад
                </span>
            }
            okButtonProps={{ className: 'customButton' }}
            cancelText={false}
            onOk={onOk}
            width={'539px'}
            centered={true}
        >
            <img src={errorCheckEmail} alt='error' />
            <div className='description_modal'>
                <p className='title_modal title_check'>Что-то пошло не так</p>
                <p className='text_modal text_check'>
                    Произошла ошибка, попробуйте отправить форму ещё раз.
                </p>
            </div>
        </Modal>
    );
};
