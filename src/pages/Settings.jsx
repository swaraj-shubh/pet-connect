import { useState } from 'react'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Settings() {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <img src="/setting.png" alt="" />
        <p>Customize your experience.</p>
        <Button>Update Settings</Button>
      </CardContent>
    </Card>
  );
}
  
  export default Settings;