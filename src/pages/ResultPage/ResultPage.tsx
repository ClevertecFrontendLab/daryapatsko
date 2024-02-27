import './ResultPage.css';
import { ResultScreen } from '@pages/components/ResultScreen';

import { Outlet } from 'react-router-dom';

export const ResultPage = () => {

    
    return (
        <ResultScreen>
            <Outlet/>
        </ResultScreen>
    );
};
