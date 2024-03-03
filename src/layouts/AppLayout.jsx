import React, { useEffect } from 'react';
import SideNavbar from '../components/Menus/SideNavbar';
import TopNavbar from '../components/Menus/TopNavbar';
import { Outlet } from 'react-router-dom';



const AppLayout = () => { 
   
  return (
    <div className='bg-[#08081c] flex '>
       <TopNavbar />
       <SideNavbar />
      <main className="pt-24 p-4 w-full overflow-y-scroll h-screen">
      <div className="text-sm text-white breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Dashboard</a>
          </li>
          {/* <li>Add Document</li> */}
        </ul>
      </div>
        <Outlet />
      </main>
    
    </div>
  );
};

export default AppLayout;
