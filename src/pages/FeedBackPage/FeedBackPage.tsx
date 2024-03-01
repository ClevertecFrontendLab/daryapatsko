import { MainLayout } from '@pages/components/MainLayout';
import HeaderFeedBack from '@pages/components/Header/HeaderFeedBack';
import { FeedBackContent } from './../components/FeedBackContent/FeedBackContent';

const FeedBackPage = () => {
  return (
    <MainLayout children={<FeedBackContent />} header={<HeaderFeedBack />}>
      
    </MainLayout>
  );
};

export default FeedBackPage;