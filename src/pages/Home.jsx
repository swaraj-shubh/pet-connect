import { useState } from 'react'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Home() {
    return (
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Welcome to Pet Connect</CardTitle>
        </CardHeader>
        <CardContent>
            <img src="/home.jpg" alt="" />
          <p>One-stop solution for all your pet care needs.</p>
        </CardContent>
      </Card>
    );
  }
  
  export default Home;