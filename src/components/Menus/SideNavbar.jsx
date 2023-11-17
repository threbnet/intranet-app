import React, { useState } from "react";
import { Menus } from "./MenuData";


const MenuItem = ({item}) => {
    return (
       
            <li className="group px-6 flex gap-3 py-2 mt-2 capitalize hover:bg-white hover:text-black"><span className="group-hover:animate-bounce">{item.icon}</span> {item.title} {item.count}</li>
        
    )
}
import logo from '../../assets/logo.png'
const SideNavbar = () => {

    const [menuData, setMenuData ] = useState(Menus);

    console.log(menuData[0].title)

    return(
        <div className="w-2/12 pt-24 border-r-2  text-white text-center  ">
            

            <div className="text-gray-100">
                <ul>
                    {menuData.map((item)=>(
                        <MenuItem item={item} />
                        
))}
                </ul>

            </div>
        </div>
    );
}

export default SideNavbar;