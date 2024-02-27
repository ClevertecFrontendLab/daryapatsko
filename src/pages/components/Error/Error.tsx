import Modal from 'antd/lib/modal'
import errorUser from './../../../assets/registration/errorUser.svg'
import { RootState, history } from '@redux/configure-store'
import { Paths } from './../../../routes/path'
import { useSelector } from 'react-redux'

export const Error = () => {
  const onOk = () =>{
    history.push(`${Paths.AUTH_lOGIN}/${Paths.AUTH_REGISTRATION}`, {state: {from: location.pathname}});
  }
  return (
    <Modal
    open={true}
    closable={false}
    okText={<span data-test-id='registration-retry-button'>Повторить</span>}
    cancelText={false}
    onOk={onOk}
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

