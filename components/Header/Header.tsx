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
  const name = searchParams.get("name");
  

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
        active={!city && !name} 
        breadcrumb={city || name ? true : false}
        href={`/locations?state=${encodeURIComponent(state)}`} 
        text={state} 
        text-enabled
      />
      {city && (
        <CalciteMenuItem 
          active={city && !name ? true : false} 
          breadcrumb={name ? true : false} 
          href={`/locations?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`} 
          text={city} 
          text-enabled
        />
      )}
      {name && (
        <CalciteMenuItem 
          active
          href={`/locations?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}&name=${encodeURIComponent(name)}`} 
          text={name} 
          text-enabled
        />
      )}
    </CalciteMenu>
  </CalciteNavigation>
)}
    </CalciteNavigation>
  )
}

export default Header