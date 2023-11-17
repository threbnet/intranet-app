import React, { useEffect } from 'react';
import SideNavbar from '../components/Menus/SideNavbar';
import TopNavbar from '../components/Menus/TopNavbar';



const AppLayout = ({ children }) => {
   
  return (
    <div className='bg-[#2d2b2b] flex '>
       <TopNavbar />
       <SideNavbar />
      <main className="pt-24 p-4 overflow-y-scroll h-screen">{children}</main>
    
    </div>
  );
};

export default AppLayout;
