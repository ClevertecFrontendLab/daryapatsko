import { MainPage } from '@pages/main-page';
import { Route, Routes } from 'react-router-dom';
import { AuthPage } from '@pages/authPage';
import { ErrorPage } from '@pages/errorPage';
import { SignUp } from '@pages/components/SignUp';
import { SignIn } from '@pages/components/SignIn';
import { Paths } from './path';

export const routes = (
    <Routes>
        <Route path={Paths.MAIN} element={<MainPage />} />
        <Route path={Paths.AUTH_lOGIN} element={<AuthPage />}>
            <Route index element={<SignIn />} />
            <Route path={Paths.AUTH_REGISTRATION} element={<SignUp />} />  
        </Route>
        <Route path={Paths.ERROR} element={<ErrorPage/>}></Route>
        
    </Routes>
);
