import React, { FC } from 'react';
import { FeedBackT } from './../../../../../types/types';
import style from './FeedBackItem.module.css';
import { Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons/lib/icons';

interface FeedBackItemProps {
    item: FeedBackT;
}

export const FeedBackItem: FC<FeedBackItemProps> = ({ item }: FeedBackItemProps) => {
    const { fullName, imageSrc, message, rating, createdAt } = item;

    const formatDate = new Date(createdAt).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return (
        <div className={style.review_container}>
            <div className={style.review_box}>
                <div className={style.review_profileInfo}>
                    <div className={style.avatar_box}>
                        {imageSrc ? <img src={imageSrc} alt='avatar' /> : <UserOutlined />}
                    </div>
                    <p className={style.review_profileName}>
                        {fullName ? `${fullName}` : 'Пользователь'}{' '}
                    </p>
                </div>
                <div className={style.review_description}>
                    <div className={style.review_descriptionInfo}>
                        <Rate value={rating} disabled style={{ fontSize: '14px', color: '#FAAD14FF' }} />
                        <p className={style.review_date}>{formatDate}</p>
                    </div>
                    <p className={style.review_text}>{message}</p>
                </div>
            </div>
        </div>
    );
};
