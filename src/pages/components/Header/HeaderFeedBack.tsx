import { Header } from 'antd/lib/layout/layout'
import React from 'react'

const HeaderFeedBack = () => {
  return (
    <Header style={{
        padding: '16px', background: '#f0f5ff',
    }}>
      <p>Главная/<span>Отзывы пользователей</span></p>
    </Header>
  )
}

export default HeaderFeedBack
