import './ResultPage.css';
import { ResultScreen } from '@pages/components/ResultScreen';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const ResultPage = () => {
    // const location = useLocation()
    // const navigate = useNavigate()

    // const resFromServer = location.state && location.state.fromServer
    // if(!resFromServer){
    //     navigate('/auth')
    //     return null
    // }
    
    return (
        <ResultScreen>
            <Outlet/>
        </ResultScreen>
    );
};
