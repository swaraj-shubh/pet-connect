import { useState } from 'react'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Adoption() {
    return (
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Adoption</CardTitle>
        </CardHeader>
        <CardContent>
            <img src="https://media.istockphoto.com/id/1628717541/photo/dog-in-an-animal-shelter.jpg?s=612x612&w=is&k=20&c=FzLj7GuywAtJYdu0EgA9HFBgEUYKZLjZIB-IPoaTfbU=" alt="" />
          <p>Find your perfect pet companion.</p>
          <Button>View Pets</Button>
        </CardContent>
      </Card>
    );
  }
  
  export default Adoption;