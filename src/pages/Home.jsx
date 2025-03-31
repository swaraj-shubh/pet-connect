import { useState } from 'react'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./home.css";
function Home() {
    return (
      <div className="homek">
        {/* <Card className="max-w-lg p-6 mx-auto mb-4 text-center shadow-lg bg-white/90 rounded-xl">
          <CardTitle className="mb-2 text-3xl font-bold text-gray-800">
            Welcome to PetConnect
          </CardTitle>
          <CardContent>
            <p className="text-lg font-semibold text-gray-600">
              One-stop solution for all your pet care needs.
            </p>
          </CardContent>
        </Card>

        <img src="/home.jpg" alt="" /> */}
        <Card className="p-6 mx-auto mt-6 mb-4 text-center shadow-lg bg-white/90 rounded-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800">
              Welcome to <span className="text-green-600">PetConnect</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-lg font-semibold text-gray-600">
              One-stop solution for all your pet care needs.
            </p>
            <img
              src="/home.jpg"
              alt="Pet Care"
              className="w-full rounded-lg shadow-md"
            />
          </CardContent>
        </Card>

        

      </div>
    );
  }
  
  export default Home;