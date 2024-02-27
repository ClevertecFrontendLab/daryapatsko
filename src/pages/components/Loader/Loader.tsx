import Lottie from 'lottie-react';
import data from './LoaderData.json';
import './loader.css'

const Loader: React.FC = () => {
    return  (
        <div data-test-id='loader'>
            <Lottie animationData={data} className='loader' />
        </div>

    )
};

export default Loader;
