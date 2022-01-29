import React , { useState, useEffect } from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';

import "react-pro-sidebar/dist/css/styles.css";

const LateralMenu = () => {

  const [menuCollapse, setMenuCollapse] = useState(false)

  const menuMotion = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
    console.log(menuCollapse)
  }

  return (
    <>
      <ProSidebar id='lateral-menu' collapsed={menuCollapse} collapsedWidth='80px'>
        <SidebarHeader>
          <img src='../assets/logo.png' alt='logo' id='menu-logo'/>
          <button onClick={menuMotion}>OPEN/CLOSE</button>
        </SidebarHeader>
        <SidebarContent>

        </SidebarContent>
        <SidebarFooter>
          
        </SidebarFooter>
      </ProSidebar>;
    </>
  );
};

export default LateralMenu;
