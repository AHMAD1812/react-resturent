import React,{useState} from 'react';
import './style.css';
import { MenuCard } from './MenuCard';
import Menu from './MenuApi';
import { Navbar } from './Navbar';

export const Resturant = () => {
    const [menuData,setMenuData]=useState(Menu);
    const uniqueCategory =
    [...new Set(Menu.map((menu)=>{
        return menu.category;
    })
    ),
    "All",];

    const [menuList,setMenuList]=useState(uniqueCategory);

    const filterItem=(category)=>{

        if(category==="All"){
            setMenuData(Menu);
            return;
        }

        const updatedList=Menu.filter((data)=>{
            return data.category===category;
        });
        setMenuData(updatedList);
    };
  return (
    <>
    <Navbar categories={menuList} getCategory={filterItem}/>
    <MenuCard menuData={menuData}/>
    </>
  )
}


