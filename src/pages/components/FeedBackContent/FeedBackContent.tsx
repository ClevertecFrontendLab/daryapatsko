import React from 'react';
import s from './feedBackStyle.module.css';
import { EmptyFeedBack } from './components/EmptyFeedBack';
import { useGetFeedBackQuery } from '@redux/FeedBackSlice';
import { FeedBackList } from './components/FeedBackList';
import { Button } from 'antd';

export const FeedBackContent = () => {
    const { data } = useGetFeedBackQuery();
    // console.log(data)

    return (
        <div className={s.feedBackContainer}>
            {/* <EmptyFeedBack /> */}

            <div className={s.feedBackList}>{data && <FeedBackList list={data} />}</div>
            <div className={s.btnBox}>
                <Button type='primary' 
                style={{maxWidth: '142px',
                padding:'4px 15px',
                fontSize:'14px',
                borderRadius:'2px',
                border: '1px solid #2f54eb'}}>
                    Написать отзыв
                </Button>
                <Button type='link'
                style={{color: '#2f54eb',
                height:'40px'    ,         
                fontSize:'16px'
                }} >
                    Развернуть все отзывы
                </Button>
            </div>
        </div>
    );
};
