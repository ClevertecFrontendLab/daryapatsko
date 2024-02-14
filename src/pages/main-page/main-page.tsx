import React from 'react';
import { MainLayout } from './../components/MainLayout';

import style from './main-page.module.css';

export const MainPage: React.FC = () => {

    return (
        <div className={style.wrapper}>
            <MainLayout />
        </div>
    );
};
