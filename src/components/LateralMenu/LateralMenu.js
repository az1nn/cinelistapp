import React , { useState } from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';

import MenuButton from '../MenuButton/MenuButton';

import "../../css/Menu.css"
import "react-pro-sidebar/dist/css/styles.css";

import { IoChevronBack, IoMenu } from "react-icons/io5";

const LateralMenu = () => {

  const [menuCollapse, setMenuCollapse] = useState(true)

  const menuMotion = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
    console.log(menuCollapse)
  }

  return (
    <>
      <ProSidebar id='lateral-menu'collapsed={menuCollapse} collapsedWidth='80px'>
        {menuCollapse ? (
          <div>
            <SidebarHeader className='remove-border'>
              <div id='sidebar-header'>
              <IoMenu onClick={menuMotion} className='menu-icon'/>
              </div>
            </SidebarHeader>
            <SidebarFooter className='remove-border'>
            
            </SidebarFooter>
          </div>  
        ) : (
          <div>
            <SidebarHeader className='remove-border'>
              <div id='sidebar-header-open'>
              <IoChevronBack onClick={menuMotion} className='menu-icon-close'/>
              </div>
              <div id='logo-container'><img src='../assets/logo.png' alt='logo' id='menu-logo'/></div>
            </SidebarHeader>
            <SidebarContent id='menu-items'>
              <div>
                <MenuButton title='Movies'/>
                <MenuButton title='Series'/>
              </div>
            </SidebarContent>
            <SidebarFooter className='remove-border'>
            
            </SidebarFooter>
          </div>
        )}
        
        
      </ProSidebar>
    </>
  );
};

export default LateralMenu;
