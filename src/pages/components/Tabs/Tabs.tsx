import React from 'react';
import './Tabs.css';
import { Tabs } from 'antd';
import { SignIn } from '../SignIn';

const items = [
    {label: "Вход", key: 'item-1', children: <SignIn />},
    {label: "Регистрация", key: 'item-2', children: 'Content2'},
]

export const TabsItems = () => {
  return (
    <Tabs items={items}> 
    </Tabs>
  )
}

