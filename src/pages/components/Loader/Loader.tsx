import Lottie from 'lottie-react';
import data from './LoaderData.json';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/configure-store';



const Loader: React.FC = () => {
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);
    return <>{isLoading && <Lottie animationData={data} />}</>;
};

export default Loader;
