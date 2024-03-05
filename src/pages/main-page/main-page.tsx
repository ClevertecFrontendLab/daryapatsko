import React, { useEffect } from 'react';
import { MainLayout } from './../components/MainLayout';
import style from './main-page.module.css';
import ContentMain from '@pages/components/Content/ContentMain';
import HeaderMain from '@pages/components/Header/HeaderMain';

export const MainPage: React.FC= () => {
    useEffect(() => {
        const clearSessionStorage = () => {
          sessionStorage.clear();
        };
    
        window.addEventListener('beforeunload', clearSessionStorage);
    
        return () => {
          window.removeEventListener('beforeunload', clearSessionStorage);
        };
      }, []);
    return (
        <MainLayout children={<ContentMain collapsed={true} />} header={<HeaderMain/>}/>
    );
};
