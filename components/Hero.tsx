import { CalciteButton, CalciteCard, CalciteInput, CalciteLabel } from '@esri/calcite-components-react'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import "@esri/calcite-components/components/calcite-card"
import "@esri/calcite-components/components/calcite-label"
import "@esri/calcite-components/components/calcite-input"
import "@esri/calcite-components/components/calcite-button"


function Hero() {
  return (
    <CalciteCard thumbnailPosition='inline-end'>
        <div slot="thumbnail" className="bg-gray-100 w-full h-[400px]"/>
        <div slot='heading' className='flex flex-col items-center justify-center  h-[400px]'>
            <CalciteLabel scale="l">Laundromats Near Me</CalciteLabel>
            <CalciteLabel scale="m">Find the best laundromats, 24-hour, wash and fold services, ect</CalciteLabel>
            <CalciteInput placeholder='Search by City or Zip' scale='l' type="search">
                <CalciteButton icon-start="arrow-right" slot="action" scale="l">Go!</CalciteButton>
            </CalciteInput>
        </div> 
    </CalciteCard>
    // <div className='flex flex-col mb-10'>

    //     <div className=' flex flex-col text-center items-center'>
    //     <div className='mt-20 justify-center text-center'>
    //         <h1 className='mb-4 text-4xl font-extrabold tracking-tight'>Laundromats near me</h1>
    //         <h2 className='mb-2 text-xl font-normal text-gray-500'>Find the best laundromats, 24-hour, wash and fold services, ect </h2>
    //     </div>

    //     <div className='mt-5 items-center justify-center flex border-1 w-[20%] shadow-sm'>
    //         <input type='text'
    //         placeholder='Searcy by City or Zip'
    //         className='p-2 w-[100%] bg-white'/>
            
    //         <button className='bg-blue-300  shadow-md cursor-pointer hover:scale-105 transition-all h-[100%] w-10 flex justify-center items-center'>
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  className="size-6 stroke-white">
    //             <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    //             </svg>
    //         </button>
    //     </div>

    //     <div className='mt-5 justify-center text-center text-gray-500'>
    //         <p>Use the search bar above to find laundromats in your city or use the country, state, and city lists below...</p>
    //     </div>
    //     </div>

    //     <div className=' flex flex-col container mx-auto px-30 mt-50'>
    //         <h1 className='mb-4 text-2xl font-extrabold tracking-tight'>
    //             Browse Laundromats Near You by City
    //         </h1>
    //         <p className='text-gray-500'>Find laundromats in your city or town by choosing your country and state. If you don’t see your city, choose the closest major metro area.</p>
    //     </div>

    // </div>
  ) 
}

export default Hero