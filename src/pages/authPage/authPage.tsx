import './authPage.css';
import fullLogo from './../../assets/registration/fullLogo.svg';
import { TabsItems } from '@pages/components/Tabs';
import Loader from '@pages/components/Loader/Loader';
import { useSelector } from 'react-redux';

export const AuthPage:React.FC = () => {
  const isLoading = useSelector(({ isLoading }) => isLoading);

  return (<>
  {isLoading ? <Loader /> : ''}
    <div className='wrapper'>
      <div className="container">
        <div className="form_box">
          <img src={fullLogo} alt="logo" />
          <TabsItems />
        </div>
      </div>
    </div>
  </>
  )
}