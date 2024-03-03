import React, { useEffect, useState } from "react";
import { Menus } from "./MenuData";

const MenuItem = ({ item }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
     
        <li
          
          className={`group px-6 flex gap-3 py-2 mt-2 capitalize hover:bg-white hover:text-black ${
            activeLink.startsWith(item.path)
              ? "bg-white text-gray-900"
              : "hover:bg-white hover:text-gray-900"
          }`}
        >
    
   
        
           
            <span onClick={()=>setSelected(!selected)} className={` ${ item?.subs ? 'menu-dropdown-toggle':''} ${selected ? 'menu-dropdown-show' : ''} `}>
            <span
              className={`${
                activeLink.startsWith(item.path) === item.path
                  ? "group-hover:animate-bounce"
                  : "group-hover:animate-bounce"
              }`}
            >
              {item.icon}
            </span>{" "}
            <span className="  ">
              {item.title} {item.count}
            </span>
          </span>
         
          <ul className={`menu-dropdown ${selected ? 'menu-dropdown-show' : ''} `}>
            {item?.subs?.map((item)=>(
              <li>
               <Link to={item.path}>{item.title}</Link>
            </li>
            ))}
         
          </ul>
       
          
       

          {/* <details closed>
            <summary>{item.title}</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details> */}
        </li>
     
    </>
  );
};

import logo from "../../assets/logo.png";
import { Link, useLocation, useSearchParams } from "react-router-dom";
const SideNavbar = () => {
  const [menuData, setMenuData] = useState(Menus);

  console.log(menuData[0].title);

  return (
    <div className=" pt-24 border-r-2  text-white text-center  ">
      <div className="text-gray-100">
        <ul className="menu bg-base w-56 ">
          {menuData.map((item) => (
            <MenuItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
