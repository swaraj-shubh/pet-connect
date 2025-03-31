import { useState } from 'react'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Map } from "@/components/Map";
import groomingData from "../data/groomingData";


function Grooming() {
  const s =`cursor-pointer bg-green-600 hover:bg-green-700 hover:shadow-xl hover:scale-110` 
  const card =`transition-transform duration-200 hover:scale-99 p-4 mb-2`
    return (
      <>
      <Card className='p-1 mb-5 bg-green-300 shadow-sm'>
        <h1 className='flex justify-center mb-1 text-4xl font-bold text-emerald-700'>Find Your Perfect Pet Companion</h1>
      </Card>

      {groomingData.map((grooming) => (
        <Card key={grooming.id} className="p-4 mb-3 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{grooming.name}</CardTitle>
            <h2 className="text-lg font-semibold text-grey-800">{grooming.price}</h2>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Map lat={grooming.lat} lng={grooming.lng} name={grooming.name} />
              <img
                src={grooming.image}
                alt={grooming.name}
                className="w-[600px] h-[300px] rounded-2xl"
              />
            </div>
            <p className="mt-4 text-gray-700">{grooming.description}</p>
            <Button className="mt-4 text-white bg-green-500 hover:bg-green-600">
              Book Service
            </Button>
          </CardContent>
        </Card>
      ))}


      
      {/* <Card className={card}>
        <CardHeader>
          <CardTitle>Vetic Pet Clinic HSR Layout</CardTitle>
          <h2>$30</h2>
        </CardHeader>
        <CardContent>
            <div className='flex justify-between'>
          <Map className="" lat={12.901167904408823} lng={77.6012488809707} name="Vetic Pet Clinic HSR Layout" />
          <img src="/vedicJP.png" alt="" className='w-[600px] h-[300px] rounded-2xl' />
          </div>
          <p>Offers doorstep pet grooming services with various packages, including Spa Bath, Haircut, Basic Grooming, and Full Grooming.</p>
          <Button className={s}>Book Service</Button>
        </CardContent>
      </Card>

      <Card className={card}>
      <CardHeader>
        <CardTitle>Zigly - Vet Clinic, Pet Grooming & Pet Products, JP Nagar, bengaluru</CardTitle>
        <h2>$40</h2>
      </CardHeader>
      <CardContent>
          
          <div className='flex justify-between'>
          <Map lat={12.88932863999933} lng={77.58170164256782} name="" />
          <img src="/zigly.png" className='w-[600px] h-[300px] rounded-2xl' alt="" />
          </div>
        <p>Provides exceptional pet grooming services with over 7 years in business and numerous positive reviews.</p>
        <Button className={s}>Book Service</Button>
      </CardContent>
    </Card>

    <Card className={card}>
      <CardHeader>
        <CardTitle>Vedic Pet Clinic Banshankari</CardTitle>
        <h2>$25</h2>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
      <Map lat={12.930257828950303} lng={77.54447772590004} name="" />
      <img src="/vedicBN.png" className='w-[600px] h-[300px] rounded-2xl' alt="" />
      </div>
          
        <p>Offers comprehensive grooming services with 9 years of experience, ensuring your pet's well-being.</p>
        <Button className={s}>Book Service</Button>
      </CardContent>
    </Card>

    <Card className={card}>
      <CardHeader>
        <CardTitle>Yeffna Poonacha's The Dog Studio- Pet Grooming Academy India, Karnataka, Bengaluru</CardTitle>
        <h2>$33</h2>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
      <Map lat={12.909529511587126} lng={77.5897475038315} name="" />
      <img src="/yeffna.png" className='w-[600px] h-[300px] rounded-2xl' alt="" />
        </div>
          
        <p>Specializes in efficient and precise grooming services, boasting 8 years in the industry. </p>
        <Button className={s}>Book Service</Button>
      </CardContent>
    </Card>
     */}
   
    
    </>
    );
  }
  
  export default Grooming;