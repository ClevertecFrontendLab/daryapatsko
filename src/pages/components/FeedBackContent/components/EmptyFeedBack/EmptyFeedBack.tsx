import { useState } from 'react';
import s from './EmptyFeedBack.module.scss';
import { Button } from 'antd';
import { FeedBackForm } from '../FeedBackForm';

export const EmptyFeedBack = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
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
                onClick={() => {
                    setOpenModal(!openModal);
                }}
                    type='primary'
                    size='small'
                    style={{ marginTop: '20px', maxWidth: '142px', fontSize: '14px' }}
                    data-test-id='write-review'

                >
                    Написать отзыв
                </Button>
            </div>
        </div>
         {openModal && <FeedBackForm openModal={openModal} />}
        </>
       
    );
};
