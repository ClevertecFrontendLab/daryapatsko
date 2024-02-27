import './authPage.css';
import fullLogo from './../../assets/registration/fullLogo.svg';
import { TabsItems } from '@pages/components/Tabs';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/configure-store';
import Loader from '@pages/components/Loader/Loader';

export const AuthPage: React.FC = () => {
    const location = useLocation();
    const formHeight = location.pathname === '/auth' ? '742' : '686';
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);
    // console.log(isLoading)
    return (
        <div className='wrapper'>
            <div className='container'>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className='form_box' style={{ height: `${formHeight}px` }}>
                        <img src={fullLogo} alt='logo' />
                        <TabsItems />
                    </div>
                )}
            </div>
        </div>
    );
};
