import React, { ReactNode, useState } from 'react';
import 'antd/dist/antd.css';
import './MainLayout.css';
import { Layout } from 'antd';
const { Sider } = Layout;
import clever from './../../../assets/Clever.svg';
import fit from './../../../assets/fit.svg';
import exitIcon from './../../../assets/exitIcon.svg';
import './MainLayout.css';
import MenuSide from './Menu/MenuSide';
import { useWindowSize } from 'usehooks-ts';
import { history } from '@redux/configure-store';
import { useDispatch } from 'react-redux';
import { removeUser } from '@redux/userSlice';
import { Paths } from './../../../routes/path';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons/lib/icons';


type IMainLayout={
    children : ReactNode,
    header: ReactNode,
}
export const MainLayout: React.FC<IMainLayout> = ({children, header}) => {
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const windowSize = useWindowSize();
    const widthSide = windowSize.width <= 480 ? '106' : '208';
    const widthSideCollapsed = windowSize.width <= 480 ? '0' : '64';
    const dataSize = windowSize.width <= 768 ? 'sider-switch-mobile' : 'sider-switch'
    const LogoutFunc = () => {
        localStorage.clear();
        dispatch(removeUser());
        history.push(Paths.AUTH_LOGIN);
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
                {header}
                {children}
                <div
                    className={`clip-path-container ${collapsed ? '' : 'open'}`}
                    data-test-id={dataSize}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? (
                        <MenuUnfoldOutlined style={{ color: '#8C8C8C' }} />
                    ) : (
                        <MenuFoldOutlined style={{ color: '#8C8C8C' }} />
                    )}
                </div>
            </Layout>
        </Layout>
    );
};
