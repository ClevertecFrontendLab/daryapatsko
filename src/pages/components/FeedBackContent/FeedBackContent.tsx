import React, { useEffect, useState } from 'react';
import s from './feedBackStyle.module.css';
import { EmptyFeedBack } from './components/EmptyFeedBack';
import { useGetFeedBackQuery } from '@redux/FeedBack/FeedBackApi';
import { FeedBackList } from './components/FeedBackList';
import { Button, Modal } from 'antd';
import { STATUS_403 } from '@constants/constAuth';
import { history } from '@redux/configure-store';
import { Paths } from './../../../routes/path'
import { FeedBackForm } from './components/FeedBackForm';

export const FeedBackContent = () => {
    const { data, error } = useGetFeedBackQuery();
    const [allReviews, setAllReviews] = useState(false)
    const [openModal, setOpenModal] = useState(false)
   

    // useEffect(()=>{

    // },[])
    if (error) {
        if ('status' in error && error.status === STATUS_403) {
        history.push(Paths.AUTH_lOGIN)
        }
        else(setOpenModal(true))
    }
    return (
        <div className={s.feedBackContainer}>
            {data?.length === 0 ? (
                <EmptyFeedBack />
            ) : (
                <>
                    <div className={s.feedBackList}>{data && <FeedBackList list={data} all={allReviews} />}</div>
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
                                setOpenModal(!openModal)
                            }}
                        >
                            Написать отзыв
                        </Button>
                        <Button
                            type='link'
                            style={{ color: '#2f54eb', height: '40px', fontSize: '16px' }}
                            onClick={()=> setAllReviews(!allReviews)}
                        >
                            {allReviews ? 'Свернуть все отзывы' : 'Развернуть все отзывы'}
                        </Button>
                    </div>
                </>
            )}
            {openModal && <FeedBackForm openModal={openModal}/>}
            {/* <Modal 
            open={true}
            title={'Что-то пошло не так'}
            closable={false}
            okText={'Назад'}
            okButtonProps={{ className: 'customButton' }}
            cancelText={false}
            // onOk={() => {}}
            width={'539px'}
            centered={true}/> */}
        </div>
    );
};
