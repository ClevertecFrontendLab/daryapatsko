import Modal from 'antd/lib/modal'
import errorUser from './../../../assets/registration/errorUser.svg'

export const Error = () => {
  return (
    <Modal
    open={true}
    closable={false}
    okText={'Повторить'}
    cancelText={false}
    onOk={() => console.log(132)}
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

