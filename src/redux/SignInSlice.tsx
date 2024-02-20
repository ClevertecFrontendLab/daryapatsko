import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { setLoading } from "./LoadingSlice";
import { useNavigate } from "react-router-dom";



export const SIGN_IN = ( values: {email:string,password:string}) => {
    const navigate = useNavigate()
    return async (dispatch: ThunkDispatch<any, object, AnyAction>) => {
        dispatch(setLoading());

        try {
            const response = await fetch(
                "https://marathon-api.clevertec.ru/auth/login", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(values)
            if (response.ok) {
                // navigate('/main')
                const data = await response.json();
                console.log(data)
                const accessToken = data.accessToken;
                localStorage.setItem('token',accessToken)
                console.log(accessToken)
            }
      

        } catch (err) {
            console.log(err);
        } finally {
            dispatch(setLoading());
        }
    };
};