import React, { useEffect } from 'react';
import { MainLayout } from './../components/MainLayout';

import style from './main-page.module.css';
// import { history } from '@redux/configure-store';

export const MainPage: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <MainLayout />
        </div>
    );
};
