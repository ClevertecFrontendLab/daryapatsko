import MenuSide from './../Menu/MenuSide';
import logoImg from './../../../../assets/logoMain.svg';
import exitIcon from './../../../../assets/exitIcon.svg';
import './Sider.css';

const Sider = () => {
    return (
        <div className='side_container'>
            <div className='side-main_content'>
                <div className='logo-container'>
                    <img src={logoImg} alt='logo' />
                </div>
                <MenuSide />
            </div>

            <div className='side_footer'>
                <div className='side_footer-container'>
                    <a href="#!"><img src={exitIcon} alt='exitIcon' />Выход</a>
                </div>
            </div>
        </div>
    );
};

export default Sider;
