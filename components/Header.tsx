"use client"

import React from 'react'
import Image from 'next/image'
import { AppBar, Box, Breadcrumbs, Button, Container, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { CalciteMenu, CalciteMenuItem, CalciteNavigation, CalciteNavigationLogo } from '@esri/calcite-components-react';
import { usePathname, useSearchParams } from "next/navigation";

import "@esri/calcite-components/components/calcite-navigation"
import "@esri/calcite-components/components/calcite-navigation-logo"
import "@esri/calcite-components/components/calcite-menu"
import "@esri/calcite-components/components/calcite-menu-item"

function Header() {

  const navItems = ['Link1', 'Link2', 'Link3'];

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const state = searchParams.get("state");
  const city = searchParams.get("city");
  

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
      {state && (
  <CalciteNavigation slot="navigation-secondary">
    <CalciteMenu slot="content-start">
      <CalciteMenuItem breadcrumb href="/" text="Home" text-enabled />
      <CalciteMenuItem 
        active={!city} 
        breadcrumb={city? true : false}
        href={`/locations?state=${encodeURIComponent(state)}`} 
        text={state} 
        text-enabled
      />
      {city && (
        <CalciteMenuItem 
          active 
          href={`/locations?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`} 
          text={city} 
          text-enabled
        />
      )}
    </CalciteMenu>
  </CalciteNavigation>
)}
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