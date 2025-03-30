

import { useState } from 'react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Appointments from './Appointments';

function Profile( { name, email, pets, appointments, orders, cart } ) {
  const [profileCompleted, setProfileCompleted] = useState(false);
  // const [name, setName] = useState("John Doe");
  // const [email, setEmail] = useState("johndoe@email.com");
  // const [pets, setPets] = useState([]);
  // const [appointments, setAppointments] = useState([]);
  // const [orders, setOrders] = useState([]);
  //const [cart, setCart] = useState([]);
  const tabstrigger = `hover:bg-white ml-2`;
  const navigate = useNavigate(); 
  console.log(cart);


  return (
    <div className="p-6 max-w-3xl mx-auto ml-12">
      <Card className="p-4">
        <CardHeader className="flex flex-col items-center">
          <img src="/profile.png" alt="Profile" className="w-24 h-24 rounded-full mb-2" />
          <CardTitle>{profileCompleted ? name : "Profile Incomplete"}</CardTitle>
          {profileCompleted ? (
            <p className="text-sm text-gray-500">{email}</p>
          ) : (
            <Button className="mt-2" onClick={() => setProfileCompleted(true)}>Complete Profile</Button>
          )}
        </CardHeader>
      </Card>

      <Tabs defaultValue="pets" className="mt-6">
        <TabsList className="flex justify-around bg-green-400 p-2 rounded-lg">
          <TabsTrigger className={tabstrigger} value="pets">Pets</TabsTrigger>
          <TabsTrigger className={tabstrigger} value="appointments">Appointments</TabsTrigger>
          <TabsTrigger className={tabstrigger} value="orders">Orders</TabsTrigger>
          <TabsTrigger className={tabstrigger} value="cart">Your Bucket</TabsTrigger>
          <TabsTrigger className={tabstrigger} value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="pets" className="mt-4">
          {pets.length > 0 ? (
            <p>Your Pets List</p>
          ) : (
            <p>No pets added yet... <Button className="ml-2">Add Pet</Button></p>
          )}
        </TabsContent>

        <TabsContent value="appointments" className="mt-4">
          {appointments.length > 0 ? (
            <p>Upcoming Appointments</p>
          ) : (
            <p>No Appointments Yet... <Button className="ml-2" onClick={()=>{navigate("/appointments")}}>Book Now</Button></p>
          )}
        </TabsContent>

        <TabsContent value="orders" className="mt-4">
          {orders.length > 0 ? (
            <p>Your Orders</p>
          ) : (
            <p>No Orders Yet... <Button className="ml-2" onClick={()=>{navigate("/products")}}>Shop More</Button></p>
          )}
        </TabsContent>

        <TabsContent value="cart" className="mt-4">
          {cart.length > 0 ? (
            
              <>
              <p>Your Orders</p>
              <ul className="list-disc pl-4">
                {cart.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <Button className="ml-2">Place Order</Button>
              <Button className="ml-2" onClick={()=>{navigate("/products")}}>Shop More</Button>
              </>
            
            
          ) : (
            <p>
              Your Bucket is Empty... 
              <Button className="ml-2">Place Order</Button>
              <Button className="ml-2" onClick={()=>{navigate("/products")}}>Shop More</Button>
            </p>
          )}
        </TabsContent>

        <TabsContent value="settings" className="mt-4">
          <p>Manage Account & Preferences</p>
          <Button className="mt-2 bg-red-500 hover:bg-red-600">Delete Account</Button>
        </TabsContent>
      </Tabs>
  
    </div>
  );
}

export default Profile;
