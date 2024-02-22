import './authPage.css';
import fullLogo from './../../assets/registration/fullLogo.svg';
import { TabsItems } from '@pages/components/Tabs';
import { useLocation } from 'react-router-dom';

export const AuthPage:React.FC = () => {
  const location = useLocation()
  const formHeight = location.pathname === '/auth' ? '742' : '686';
  return (
    <div className='wrapper'>
      <div className="container">
        <div className="form_box" style={{height:`${formHeight}px`}}>
          <img src={fullLogo} alt="logo" />
          <TabsItems />
        </div>
      </div>
    </div>
  )
}