import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";


interface IUser{
  email: string,
  password: string,
}

export const CREATE_USER = (payload: IUser, navigate: (path: string) => void) => {
  return async (dispatch: ThunkDispatch<any, object, AnyAction>) => {
      try {
          const response = await fetch(
              "https://marathon-api.clevertec.ru/auth/registration", {
              method: "POST",
              body: JSON.stringify(payload),
              headers: {
                  'Content-Type': 'application/json',
              },
          }
          );
          if (response.ok){
            navigate('/result/success')
          }else if(response.status === 409){
            navigate('/result/error-user-exist')
          }else{
            navigate('/result/error')
          }
          return response;
      } catch (err) {
          console.log(err);
      }
  };
};
