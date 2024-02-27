import './ResultPage.css';
import { ResultScreen } from '@pages/components/ResultScreen';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const ResultPage = () => {

    
    return (
        <ResultScreen>
            <Outlet/>
        </ResultScreen>
    );
};
