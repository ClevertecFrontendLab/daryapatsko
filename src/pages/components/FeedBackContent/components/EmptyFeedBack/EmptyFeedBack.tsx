import React from 'react';
import s from './EmptyFeedBack.module.css';
import { Button } from 'antd';

export const EmptyFeedBack = () => {
    return (
        <div className={s.emptyFeed_container}>
            <div className={s.emptyFeed_content}>
                <div className={s.emptyFeed_box}>
                    <h3 className={s.emptyFeed_title}>Оставьте свой отзыв первым</h3>
                    <p className={s.emptyFeed_description}>
                        Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении. <br />
                        Поделитесь своим мнением и опытом с другими пользователями,
                        <br />и помогите им сделать правильный выбор.
                    </p>
                </div>

                <Button
                    type='primary'
                    size='small'
                    style={{ marginTop: '20px', maxWidth: '142px', fontSize: '14px' }}
                >
                    Написать отзыв
                </Button>
            </div>
        </div>
    );
};
