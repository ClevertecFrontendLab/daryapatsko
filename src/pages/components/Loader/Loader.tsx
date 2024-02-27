import Lottie from 'lottie-react';
import data from './LoaderData.json';

const Loader: React.FC = () => {
    return  <Lottie animationData={data} />;
};

export default Loader;
