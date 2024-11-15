

import StokSidebar from '@/components/sidebar/StokSidebar';
const StokYonetimi = ({ children }) => {
  return (
    <div className="flex w-full " style={{ height: '100vh' }}>



      <StokSidebar />

      <div className="animated fadeInRight w-full">

        {children}
      </div>
    </div>

  )
}

export default StokYonetimi