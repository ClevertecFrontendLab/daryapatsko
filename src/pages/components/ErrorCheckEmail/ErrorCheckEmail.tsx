import { Modal } from 'antd'
import './ErrorCheckEmail.css'
import { history } from '@redux/configure-store'
import errorCheckEmail from './../../../assets/registration/errorCheckEmail.svg'

export const ErrorCheckEmail = () => {
  return (
    <Modal
    open={true}
    closable={false}
    okText={<span className='customButton' data-test-id='check-back-button'
    >Назад</span>}
    okButtonProps={{ className: 'customButton' }}
    cancelText={false}
    onOk={() => history.push('/result/check-email')}
    width={'539px'}
    centered={true}
>
    <img src={errorCheckEmail} alt='error' />
    <div className='description_modal'>
        <p className='title_modal title_check'>Что-то пошло не так</p>
        <p className='text_modal text_check'>
        Произошла ошибка, попробуйте отправить форму ещё раз.
        </p>
    </div>
</Modal>
  )
}


