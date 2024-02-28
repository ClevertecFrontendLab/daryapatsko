import { ReactNode } from 'react';
import './ResultScreen.css';


type ResultScreenProp = {
    children: ReactNode
}
export const ResultScreen:React.FC<ResultScreenProp> = ({children}) => {
  return (
    <div className='wrapper_screen'>
      <div className="container_screen">
        {children}
      </div>
    </div>
  )
}

