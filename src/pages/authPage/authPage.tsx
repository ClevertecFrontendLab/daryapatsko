import './authPage.css';
import fullLogo from './../../assets/registration/fullLogo.svg';
import { TabsItems } from '@pages/components/Tabs';

export const AuthPage: React.FC = () => {
    
    return (
        <div className='wrapper'>
            <div className='container'>
                    <div className='form_box' 
                    >
                        <img src={fullLogo} alt='logo' />
                        <TabsItems />
                    </div>
            </div>
        </div>
    );
};
