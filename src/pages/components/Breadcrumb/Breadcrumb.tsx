import React from 'react';
import { Breadcrumb } from 'antd';
import {Paths} from './../../../routes/path'
import { Link } from 'react-router-dom';

const links =[
    {path: Paths.MAIN, breadcrumb: 'Главная'},
    {path: Paths.FEEDBACK, breadcrumb: 'Отзывы пользователей'}
]

const BreadcrumbLink = () => {
   
    return (
        <Breadcrumb>
            {links && links.map((e,i) => (
                <Breadcrumb.Item key={i}>
                    {e.path ? <Link style={{fontSize:'14px', fontWeight:'400'}} to={e.path}>{e.breadcrumb}</Link> : ''}
                </Breadcrumb.Item>
            ))}
    
           </Breadcrumb>
    );
};

export default BreadcrumbLink;
