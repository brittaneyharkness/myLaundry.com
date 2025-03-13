"use client"

import React from 'react'
import Image from 'next/image'
import { AppBar, Box, Button, Container, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { CalciteMenu, CalciteMenuItem, CalciteNavigation, CalciteNavigationLogo } from '@esri/calcite-components-react';

import "@esri/calcite-components/components/calcite-navigation"
import "@esri/calcite-components/components/calcite-navigation-logo"
import "@esri/calcite-components/components/calcite-menu"
import "@esri/calcite-components/components/calcite-menu-item"

function Header() {

  const navItems = ['Link1', 'Link2', 'Link3'];

  return (
    <CalciteNavigation slot="header" className="fixed w-full z-10">
      <CalciteNavigationLogo slot="logo" thumbnail='/vercel.svg' heading='My Laundry' description='Best laundromats near you'>
      </CalciteNavigationLogo>
      <CalciteMenu slot="content-end">
        {navItems.map(item => {
          return(
            <CalciteMenuItem key={item} text={item} text-enabled />
          )
        })}
      </CalciteMenu>
    </CalciteNavigation>
    // <div className='bg-white w-[100%]'>
    //     <div className='flex justify-between container mx-auto px-30 mt-3 gap-10'>
    //     {/* LOGO AND TEXT */}
    //     <div className='flex'>
    //     <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
    //       <circle r="45" cx="50" cy="50" fill="blue" />
    //     </svg>

    //     </div>

    //     <div className='justify-evenly flex text-center'>
    //     {/* NAVIGATION LINKS */}
    //     {navItems.map(item => {
    //       return(
    //         <div key={item} className='items-center h-[100%] w-[100%] p-10 flex tracking-widest text-[18px] font-semibold cursor-pointer hover:bg-gray-100 transition-all '>
    //           {item}
    //         </div>
    //       )
    //     })}
    //     </div>
    //   </div>
    // </div>

  )
}

export default Header