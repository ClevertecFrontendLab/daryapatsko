import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './MainLayout.css';
import {
    CalendarTwoTone,
    HeartTwoTone,
    IdcardTwoTone,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyTwoTone,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import clever from './../../../assets/Clever.svg';
import fit from './../../../assets/fit.svg';
import exitIcon from './../../../assets/exitIcon.svg';
import HeaderMain from './../Header/HeaderMain';

import './MainLayout.css';
import MenuSide from './Menu/MenuSide';

export const MainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Sider trigger={null}
             collapsible 
             collapsed={collapsed}
             collapsedWidth={50} 
             width={208} 
             theme='light'>
                <div className='main_container-sider'>
                    <div className='logo'>
                        {!collapsed && <img src={clever} className="clever" alt='clever' />}
                        <img src={fit} alt='fit' />
                    </div>
                    <MenuSide collapsed={collapsed}/>
                </div>
                <div className='side_footer'>
                    <div className='side_footer-container'>
                        <a href='#!'>
                            <img src={exitIcon} alt='exitIcon' />
                            {!collapsed && <span>Выход</span>}
                        </a>
                    </div>
                </div>
            </Sider>
            <Layout className='site-layout'>
                <HeaderMain/>
                <Content
                    className='site-layout-background'
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                   {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Content>
            </Layout>
        </Layout>
    );
};
