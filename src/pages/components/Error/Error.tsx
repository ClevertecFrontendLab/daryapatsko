import Modal from 'antd/lib/modal';
import errorUser from './../../../assets/registration/errorUser.svg';
import { history } from '@redux/configure-store';
import { Paths } from './../../../routes/path';
import { useWindowSize } from 'usehooks-ts';

export const Error = () => {
    const windowSize = useWindowSize();
    const modalWidth = windowSize.width < 450 ? '328px' : '539px';
    const onOk = () => {
        history.push(`${Paths.AUTH_LOGIN}/${Paths.AUTH_REGISTRATION}`, {
            state: { from: location.pathname },
        });
    };
    return (
        <Modal
            open={true}
            closable={false}
            okText={<span data-test-id='registration-retry-button'>Повторить</span>}
            cancelText={false}
            onOk={onOk}
            width={modalWidth}
            centered={true}
        >
            <img src={errorUser} alt='error' />
            <div className='description_modal description_success'>
                <p className='title_modal'>Данные не сохранились</p>
                <p className='text_modal'>
                    Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.
                </p>
            </div>
        </Modal>
    );
};
