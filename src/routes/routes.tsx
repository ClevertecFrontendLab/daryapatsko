import { MainPage } from '@pages/main-page';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
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
import { ConfirmPassword } from '@pages/components/ConfirmPassword';
import { ChangePassword } from '@pages/components/ChangePassword';
import { ErrorChangePassword } from '@pages/components/ErrorChangePassword';
import { SuccessChangePassword } from '@pages/components/SuccessChangepassword';
import { ErrorCheckEmail } from '@pages/components/ErrorCheckEmail';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/configure-store';
import { useEffect } from 'react';
import Loader from '@pages/components/Loader/Loader';
import FeedBackPage from '@pages/FeedBackPage/FeedBackPage';

const RoutesComponent = () => {
    const navigate = useNavigate();
    const location = useSelector((state: RootState) => state.router.location);
    const token = localStorage.getItem('token');
    const sessionToken = sessionStorage.getItem('token');
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);
    // useEffect(() => {
    //     if (token || sessionToken) {
    //         const isResultPage = location?.pathname.startsWith('/result');
    //         if (isResultPage) {
    //             navigate(Paths.AUTH_lOGIN);
    //         } else {
    //             navigate(Paths.MAIN);
    //         }
    //     }
    // }, [token, navigate]);

    return (
        <>
            {isLoading && <Loader />}
            <Routes>
                <Route path={Paths.DEFAULT} element={<Navigate to={Paths.AUTH_lOGIN} />} />
                <Route path={Paths.MAIN} element={<MainPage />} />
                <Route path={Paths.FEEDBACK} element={<FeedBackPage />} />
                <Route path={Paths.AUTH_lOGIN} element={<AuthPage />}>
                    <Route index element={<SignIn />} />
                    <Route path={Paths.AUTH_REGISTRATION} element={<SignUp />} />
                </Route>
                <Route path={Paths.AUTH_lOGIN} element={<ResultPage />}>
                    <Route path={Paths.AUTH_CONFIRM} element={<ConfirmPassword />} />
                    <Route path={Paths.AUTH_CHANGE_PASSWORD} element={<ChangePassword />} />
                </Route>
                <Route path={Paths.RESULT} element={<ResultPage />}>
                    <Route path={Paths.ERROR_LOGIN} element={<ErrorModal />} />
                    <Route path={Paths.SUCCESS} element={<SuccessModal />} />
                    <Route path={Paths.ERROR_USER} element={<ErrorUser />} />
                    <Route path={Paths.ERROR} element={<Error />} />
                    <Route path={Paths.ERROR_CHECK} element={<ErrorCheck />} />
                    <Route path={Paths.ERROR_CHECK_EMAIL} element={<ErrorCheckEmail />} />
                    <Route path={Paths.ERROR_CHANGE_PASSWORD} element={<ErrorChangePassword />} />
                    <Route
                        path={Paths.SUCCESS_CHANGE_PASSWORD}
                        element={<SuccessChangePassword />}
                    />
                </Route>
            </Routes>
        </>
    );
};

export default RoutesComponent;
