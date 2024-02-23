import './ResultPage.css';
import { ResultScreen } from '@pages/components/ResultScreen';

import { Outlet } from 'react-router-dom';

export const ResultPage = () => {
    return (
        <ResultScreen>
            <Outlet/>
            {/* <Modal
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
                
            </Modal> */}
        </ResultScreen>
    );
};
