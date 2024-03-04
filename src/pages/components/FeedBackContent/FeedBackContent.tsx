import { useEffect, useState } from 'react';
import s from './feedBackStyle.module.css';
import { EmptyFeedBack } from './components/EmptyFeedBack';
import { useGetFeedBackQuery } from '@redux/FeedBack/FeedBackApi';
import { FeedBackList } from './components/FeedBackList';
import { Button, Modal } from 'antd';
import { STATUS_403 } from '@constants/constAuth';
import { history } from '@redux/configure-store';
import { Paths } from './../../../routes/path';
import { FeedBackForm } from './components/FeedBackForm';
import errorIcon from './../../../assets/registration/errorCheckEmail.svg';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

export const FeedBackContent = () => {
    const { data, error, refetch } = useGetFeedBackQuery();
    const [allReviews, setAllReviews] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const { refetchData } = useAppSelector((state) => state.feedback);
    console.log(error)
    useEffect(() => {
        
        if (refetchData) {
          refetch();
        }
      }, [refetchData]);

      useEffect(() => {
        if (error) {
          if ('status' in error && error.status === STATUS_403) {
            history.push(Paths.AUTH_LOGIN);
            localStorage.clear();
          } else {
            setErrorModal(true);
          }
        }
      }, [error])
    
 
    return (
        <div className={s.feedBackContainer}>
            {data?.length === 0 ? (
                <EmptyFeedBack />
            ) : (
                <>
                    <div className={s.feedBackList}>
                        {data && <FeedBackList list={data} all={allReviews} />}
                    </div>
                    <div className={s.btnBox}>
                        <Button
                            type='primary'
                            style={{
                                maxWidth: '142px',
                                padding: '4px 15px',
                                fontSize: '14px',
                                borderRadius: '2px',
                                border: '1px solid #2f54eb',
                            }}
                           
                            onClick={() => {
                                setOpenModal(!openModal);
                            }}
                            data-test-id='write-review'
                        >
                            Написать отзыв
                        </Button>
                        <Button
                            type='link'
                            style={{ color: '#2f54eb', height: '40px', fontSize: '16px' }}
                            onClick={() => setAllReviews(!allReviews)}
                            data-test-id='all-reviews-button'
                        >
                            {allReviews ? 'Свернуть все отзывы' : 'Развернуть все отзывы'}
                        </Button>
                    </div>
                </>
            )}
            {openModal && <FeedBackForm openModal={openModal} />}
            {errorModal && <Modal open={true} closable={false} cancelText={false} footer={false} centered  maskStyle={{ background: '#799CD41A', backdropFilter: 'blur(5px)' }}>
                <img src={errorIcon} alt='error' />
                <p className='title_modal'>Что-то пошло не так</p>
                <p className='text_modal'>Произошла ошибка, попробуйте ещё раз.</p>

                <Button type='primary' htmlType='button' onClick={()=> history.push(Paths.MAIN)}  style={{ width: '180px', marginTop:'24px' }}>
                    Назад
                </Button>
            </Modal>}
        </div>
    );
};
