import { CalciteBlock, CalciteButton, CalciteCard, CalciteInput, CalciteLabel } from '@esri/calcite-components-react'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import "@esri/calcite-components/components/calcite-block"
import "@esri/calcite-components/components/calcite-card"
import "@esri/calcite-components/components/calcite-label"
import "@esri/calcite-components/components/calcite-input"
import "@esri/calcite-components/components/calcite-button"


function Hero() {
  return (
    <CalciteBlock className='w-[100%]' slot="panel-top">
      <div slot="content-start" className='h-40 w-[100vw] flex align-middle bg-gray-500'>
        <CalciteLabel layout='inline' className='flex p-10 justify-between w-[100%]'>
          <div className='w-full'>
            <span className='text-4xl font-extrabold p-2 text-white'>Laundromats Finder</span>
            <span className='text-2xl text-white'>Best laundromats near you</span>
          </div>
          <CalciteInput 
            scale='l' 
            placeholder='Searcy by city, zip, or state'
            className='w-2xl'
            >
              <CalciteButton slot="action" scale="l">Go</CalciteButton>
            </CalciteInput>
          </CalciteLabel>
      </div>

    </CalciteBlock>
  ) 
}

export default Hero