import { Button, Modal, Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';
import style from './FeedBackForm.module.css';
import './feedBackForm.css';
import { StarTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setLoading } from '@redux/LoadingSlice';
import { usePostReviewMutation } from '@redux/FeedBack/FeedBackApi';
import successIcon from './../../../../../assets/registration/successIcon.svg';
import errorUser from './../../../../../assets/registration/errorUser.svg';
import { setReview } from '@redux/FeedBack/FeedBackSlice';

export const FeedBackForm = ({ openModal }: any) => {
    const [postReview] = usePostReviewMutation();
    const [isOpen, setIsOpen] = useState(openModal);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalError, setModalError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleRateChange = (rating: number) => {
        setRating(rating);
    };
    const onOk = async () => {
        setIsOpen(!isOpen);
        dispatch(setLoading());
        dispatch(setReview({message, rating}))
        postReview({ message, rating })
            .unwrap()
            .then(() => {
                setModalSuccess(!modalSuccess);
            })
            .catch(() => {
                setModalError(!modalError);
            })
            .finally(() => {
                dispatch(setLoading());
            });
    };

    const closeModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Modal
                open={isOpen}
                title={'Ваш отзыв'}
                closable
                maskStyle={{ background: '#799CD41A', backdropFilter: 'blur(5px)' }}
                onCancel={closeModal}
                bodyStyle={{ alignItems: 'start', padding: '24px' }}
                footer={[
                    <Button
                        type='primary'
                        key='submit'
                        htmlType='submit'
                        onClick={onOk}
                        style={{ maxWidth: '130px' }}
                        data-test-id='new-review-submit-button'
                    >
                        Опубликовать
                    </Button>,
                ]}
                width={'539px'}
            >
                <Rate
                    disabled={disabled}
                    value={rating}
                    onChange={handleRateChange}
                    character={({ value: currentValue, index }) => {
                        return currentValue && index !== undefined && index < currentValue ? (
                            <StarTwoTone twoToneColor={['#faad14', '#faad14']} />
                        ) : (
                            <StarTwoTone twoToneColor={['#faad14', '#FFF']} />
                        );
                    }}
                />
                <TextArea
                    style={{ marginTop: '16px' }}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    placeholder='Добавьте ваш отзыв'
                    autoSize
                />
            </Modal>

            <Modal
                open={modalSuccess}
                closable={false}
                okText={<span>Отлично</span>}
                cancelText={false}
                onOk={() => setModalSuccess(!modalSuccess)}
                // width={modalWidth}
                centered={true}
            >
                <img src={successIcon} alt='success' style={{ paddingTop: '5px' }} />
                <p className='description_modal'>Отзыв успешно опубликован</p>
            </Modal>

            <Modal
                open={modalError}
                closable={false}
                cancelText={false}
                footer={false}
                centered
            >
                <img src={errorUser} alt='error' />
                <p className='title_modal'>Данные не сохранились</p>
                <p className='text_modal'>Что-то пошло не так. Попробуйте ещё раз.</p>
                <div className={style.btn_box}>
                    <Button
                        type='primary'
                        htmlType='submit'
                        onClick={() => {setIsOpen(!isOpen)
                        setModalError(!modalError)}}
                        style={{ width: '180px' }}
                    >
                        Написать отзыв
                    </Button>
                    <Button
                        type='primary'
                        htmlType='submit'
                        onClick={() => setModalError(!modalError)}
                        style={{
                            background: '#fff',
                            color: '#262626',
                            border: '1px solid #d9d9d9',
                            boxShadow: 'none',
                            width:'180px'
                        }}
                    >
                        Закрыть
                    </Button>
                </div>
            </Modal>
        </>
    );
};
