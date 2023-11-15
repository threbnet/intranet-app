import React, { useEffect } from 'react';
import SideNavbar from '../components/Menus/SideNavbar';



const AppLayout = ({ children }) => {
   
  return (
    <div className='bg-[#2d2b2b] flex'>
       <SideNavbar />
      <main className="pt-12 p-4">{children}</main>
    
    </div>
  );
};

export default AppLayout;
