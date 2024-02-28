import './ResultPage.css';
import { ResultScreen } from '@pages/components/ResultScreen';

import { Outlet } from 'react-router-dom';

export const ResultPage = () => (
    <ResultScreen>
        <Outlet />
    </ResultScreen>
);
