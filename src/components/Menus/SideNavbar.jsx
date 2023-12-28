import React, { useEffect, useState } from "react";
import { Menus } from "./MenuData";

const MenuItem = ({ item }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Link to={item.path}>
        <li
          className={`group px-6 flex gap-3 py-2 mt-2 capitalize hover:bg-white hover:text-black ${
            activeLink.startsWith(item.path)
              ? "bg-white text-gray-900"
              : "hover:bg-white hover:text-gray-900"
          }`}
        >
          <span
            className={`${
              activeLink.startsWith(item.path) === item.path
                ? "group-hover:animate-bounce"
                : "group-hover:animate-bounce"
            }`}
          >
            {item.icon}
          </span>{" "}
          <span className="hidden group-hover:text-white ">
            {item.title} {item.count} 
          </span>
        </li>
      </Link>
    </>
  );
};

import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
const SideNavbar = () => {
  const [menuData, setMenuData] = useState(Menus);

  console.log(menuData[0].title);

  return (
    <div className=" pt-24 border-r-2  text-white text-center  ">
      <div className="text-gray-100">
        <ul>
          {menuData.map((item) => (
            <MenuItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
