import './Tabs.css';
import { Tabs } from 'antd';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';
import { useLocation, useNavigate } from 'react-router-dom';
import {Paths} from './../../../routes/path'
import { history } from '@redux/configure-store';

const items = [
    {label: "Вход", key: 'item-1', children: <SignIn />},
    {label: "Регистрация", key: 'item-2', children: <SignUp />},
]

export const TabsItems = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const handleTabChange = (key: string) => {
    if (key === 'item-2') {
      history.push(`${Paths.AUTH_lOGIN}/${Paths.AUTH_REGISTRATION}`)
    } else {
      history.push(Paths.AUTH_lOGIN)
    }
  };
  const activeTab = location.pathname === `${Paths.AUTH_lOGIN}/${Paths.AUTH_REGISTRATION}` ? 'item-2' : 'item-1';
  return (
    <Tabs items={items} activeKey={activeTab} onChange={handleTabChange}> 
    </Tabs>
  )
}

