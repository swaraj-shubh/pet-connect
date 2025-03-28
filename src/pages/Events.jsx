import { useState } from 'react'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Events() {
    return (
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Events</CardTitle>
        </CardHeader>
        <CardContent>
            <img src="/event.jpg" alt="" />
          <p>Join or host events for pets.</p>
          <Button>Explore Events</Button>
        </CardContent>
      </Card>
    );
  }

  export default Events;