import { MainPage } from '@pages/main-page';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPage } from '@pages/authPage';
import { SignUp } from '@pages/components/SignUp';
import { SignIn } from '@pages/components/SignIn';

export const routes = (
    <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />}>
            <Route index element={<SignIn />} />
            <Route path="registration" element={<SignUp />} />
        </Route>
    </Routes>
);
