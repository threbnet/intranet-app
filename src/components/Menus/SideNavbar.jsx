import React, { useState } from "react";
import { Menus } from "./MenuData";


const MenuItem = ({item}) => {
    return (
       
            <li className=" px-6 flex gap-3 py-2 mt-2 capitalize hover:bg-white hover:text-black">{item.icon} {item.title} {item.count}</li>
        
    )
}

const SideNavbar = () => {

    const [menuData, setMenuData ] = useState(Menus);

    console.log(menuData[0].title)

    return(
        <div className="w-2/12 pt-6 border-r-2 h-screen text-white text-center  ">
            <h2>TREBNET</h2>

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