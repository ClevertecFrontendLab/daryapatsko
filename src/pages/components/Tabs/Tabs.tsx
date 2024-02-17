import './Tabs.css';
import { Tabs } from 'antd';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const items = [
    {label: "Вход", key: 'item-1', children: <SignIn />},
    {label: "Регистрация", key: 'item-2', children: <SignUp />},
]

export const TabsItems = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const handleTabChange = (key: string) => {
    if (key === 'item-2') {
      navigate('/auth/registration');
    } else {
      navigate('/auth');
    }
  };
  const activeTab = location.pathname === '/auth/registration' ? 'item-2' : 'item-1';
  return (
    <Tabs items={items} activeKey={activeTab} onChange={handleTabChange}> 
    </Tabs>
  )
}

