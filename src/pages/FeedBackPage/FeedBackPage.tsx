import React from 'react'
import { MainLayout } from '@pages/components/MainLayout'
import FeedBackContent from '@pages/components/FeedBackContent/FeedBackContent'
import HeaderFeedBack from '@pages/components/Header/HeaderFeedBack'

const FeedBackPage = () => {
  return (
    <MainLayout children={<FeedBackContent/>} header={<HeaderFeedBack/>}>
      
    </MainLayout>
  )
}

export default FeedBackPage
