import './Header.css';
import { Header } from 'antd/lib/layout/layout';
import {SettingOutlined} from '@ant-design/icons';

const HeaderMain = () => {
  return (
    <Header className="site-layout-background">
          <a href='#!'>Главная</a>
          <div className="content__header">
            <h1 className='content_header-title'>Приветствуем тебя в CleverFit — приложении,<br/> которое поможет тебе добиться своей мечты!</h1>
            <div className="setting_box">
              <SettingOutlined />
              <p>Настройки</p>
            </div>
          </div>
    </Header>
  )
}

export default HeaderMain
