import { MainPage } from "@pages/main-page";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "@pages/authPage";

export const routes = (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
    </Routes>
);
