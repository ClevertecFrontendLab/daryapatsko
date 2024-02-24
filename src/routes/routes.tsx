import { MainPage } from '@pages/main-page';
import { Route, Routes } from 'react-router-dom';
import { AuthPage } from '@pages/authPage';
import { ResultPage } from '@pages/ResultPage';
import { SignUp } from '@pages/components/SignUp';
import { SignIn } from '@pages/components/SignIn';
import { Paths } from './path';
import ErrorModal from '@pages/components/ErrorModal/ErrorModal';
import { SuccessModal } from '@pages/components/SuccessModal';
import { ErrorUser } from '@pages/components/ErrorUser';
import { Error } from '@pages/components/Error';
import { ErrorCheck } from '@pages/components/ErrorCheck';

export const routes = (
    <Routes>
        <Route path={Paths.MAIN} element={<MainPage />} />
        <Route path={Paths.AUTH_lOGIN} element={<AuthPage />}>
            <Route index element={<SignIn />} />
            <Route path={Paths.AUTH_REGISTRATION} element={<SignUp />} />  
        </Route>
        <Route path={Paths.RESULT} element={<ResultPage/>}>
            <Route path={Paths.ERROR_LOGIN} element={<ErrorModal/>}/>
            <Route path={Paths.SUCCESS} element={<SuccessModal/>}/>
            <Route path={Paths.ERROR_USER} element={<ErrorUser/>}/>
            <Route path={Paths.ERROR} element={<Error/>}/>
            <Route path={Paths.ERROR_CHECK} element={<ErrorCheck/>}/>s
        </Route>
        
    </Routes>
);
