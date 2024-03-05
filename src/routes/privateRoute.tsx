import { Navigate, Outlet } from "react-router-dom"
import { Paths } from './../routes/path'
import { history } from "@redux/configure-store";
import { useAppSelector } from "@hooks/typed-react-redux-hooks";
import { useEffect } from "react";

const PrivateRoute = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  const tokenGoogle = history.location.search.split('=')[1]
  const { remember } = useAppSelector((state) => state.user);

  if(tokenGoogle && remember){
    localStorage.setItem('token', tokenGoogle)
  }
 
  return (
    token ? <Outlet /> : <Navigate to={Paths.AUTH_LOGIN} />
  )
}

export default PrivateRoute