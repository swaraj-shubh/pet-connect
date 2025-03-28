import { useState } from 'react'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Profile() {
    return (
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
            <img src="/profile.png" alt="" />
            
          <p>Manage your profile and pet details.</p>
          <Button>Edit Profile</Button>
        </CardContent>
      </Card>
    );
  }
  
  export default Profile;