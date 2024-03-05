import { Header } from 'antd/lib/layout/layout'
import { BreadcrumbLink } from '../Breadcrumb'

const HeaderFeedBack = () => {
  return (
    <Header style={{
        padding: '16px', background: '#f0f5ff',
    }}>
      <BreadcrumbLink />
    </Header>
  )
}

export default HeaderFeedBack
