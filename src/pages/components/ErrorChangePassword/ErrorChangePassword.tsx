import { Modal } from 'antd';
import './ErrorChangePassword.css';
import { history } from '@redux/configure-store';
import errorUser from './../../../assets/registration/errorUser.svg';
import { Paths } from './../../../routes/path';
import { useWindowSize } from 'usehooks-ts';

export const ErrorChangePassword = () => {
    const windowSize = useWindowSize();
    const modalWidth = windowSize.width < 450 ? '328px' : '539px';
    const onOk = () => {
        history.push(`${Paths.AUTH_LOGIN}/${Paths.AUTH_CHANGE_PASSWORD}`, {
            state: { from: location.pathname },
        });
    };
    return (
        <Modal
            open={true}
            closable={false}
            okText={<span data-test-id='change-retry-button'>Повторить</span>}
            cancelText={false}
            onOk={onOk}
            width={modalWidth}
            centered={true}
        >
            <img src={errorUser} alt='error' />
            <div className='description_modal'>
                <p className='title_modal'>Данные не сохранились</p>
                <p className='text_modal text_check'>Что-то пошло не так. Попробуйте ещё раз</p>
            </div>
        </Modal>
    );
};
