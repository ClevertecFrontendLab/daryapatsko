import './Header.css';
import { Header } from 'antd/lib/layout/layout';
import {SettingOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Paths } from './../../../routes/path';

const HeaderMain = () => {
  
  return (
    <Header className="site-layout-background">
          <Link to={Paths.MAIN}>Главная</Link>
          <div className="content__header">
            <h1 className='content_header-title'>Приветствуем тебя в CleverFit — приложении,<br/> которое поможет тебе добиться своей мечты!</h1>
            <div className="setting_box">
              <div className="setting_img"> <SettingOutlined /></div>
              <p className='setting_text'>Настройки</p>
            </div>
          </div>
    </Header>
  )
}

export default HeaderMain
