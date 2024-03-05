import { MainLayout } from '@pages/components/MainLayout';
import HeaderFeedBack from '@pages/components/Header/HeaderFeedBack';
import { FeedBackContent } from './../components/FeedBackContent/FeedBackContent';

export const FeedBackPage = () => (
    <MainLayout children={<FeedBackContent />} header={<HeaderFeedBack />} />
);
