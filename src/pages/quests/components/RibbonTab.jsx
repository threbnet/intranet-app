import { Tabs } from "../data/RibbonTabData";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

const TabItem = ({ item }) => {
  const location = useLocation();
  const { id } = useParams();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Link to={item.path}>
        <li
          className={`hover:bg-white hover:text-gray-900 p-2 px-8 text-lg flex gap-1 ${
      
            activeLink === "/quests/" + id + "/" + item.path
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
          <span className="hidden lg:block">
            {item.title} {item.count}
          </span>
        </li>
      </Link>
    </>
  );
};
const RibbonTab = ({ id }) => {
  return (
    <div className="w-full pl-52 overflow-hidden">
      <ul className="text-white flex flex-wrap lg:flex-nowrap ">
        {Tabs.map((item) => (
          <TabItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default RibbonTab;
