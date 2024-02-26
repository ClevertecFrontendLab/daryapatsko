import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './MainLayout.css';
import { Layout } from 'antd';
const { Sider } = Layout;
import clever from './../../../assets/Clever.svg';
import fit from './../../../assets/fit.svg';
import exitIcon from './../../../assets/exitIcon.svg';
import HeaderMain from './../Header/HeaderMain';

import './MainLayout.css';
import MenuSide from './Menu/MenuSide';
import ContentMain from '../Content/ContentMain';
import Footer from '../Footer/Footer';
import { useWindowSize } from 'usehooks-ts';
import { history } from '@redux/configure-store';

export const MainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const windowSize = useWindowSize();
    const widthSide = windowSize.width <= 480 ? '106' : '208';
    const widthSideCollapsed = windowSize.width <= 480 ? '0' : '64';
    const LogoutFunc = () => {
        localStorage.clear();
        history.push('/auth');
    };

    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={widthSideCollapsed}
                width={widthSide}
                theme='light'
            >
                <div className='main_container-sider'>
                    <div className={`logo ${collapsed ? 'logo-collapsed' : ''}`}>
                        {!collapsed && <img src={clever} className='clever' alt='clever' />}
                        <img src={fit} alt='fit' className='fit' />
                    </div>
                    <MenuSide collapsed={collapsed} />
                </div>
                <div className='side_footer'>
                    <div className='side_footer-container'>
                        <button onClick={LogoutFunc}>
                            <img src={exitIcon} alt='exitIcon' className='img-exit' />
                            {!collapsed && <span>Выход</span>}
                        </button>
                    </div>
                </div>
            </Sider>
            <Layout className='site-layout'>
                <HeaderMain />
                <ContentMain collapsed={collapsed} setCollapsed={setCollapsed} />
                <Footer collapsed={collapsed} />
            </Layout>
        </Layout>
    );
};
