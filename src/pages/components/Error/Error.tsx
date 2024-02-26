import Modal from 'antd/lib/modal'
import errorUser from './../../../assets/registration/errorUser.svg'
import { history } from '@redux/configure-store'

export const Error = () => {
  return (
    <Modal
    open={true}
    closable={false}
    okText={<span data-test-id='registration-retry-button'>Повторить</span>}
    cancelText={false}
    onOk={() => history.push('auth/registration')}
    width={'539px'}
    centered={true}
>
    <img src={errorUser} alt='error' />
    <div className='description_modal description_success' >
        <p className='title_modal'>Данные не сохранились</p>
        <p className='text_modal'>
        Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.
        </p>
    </div>
</Modal>
  )
}

