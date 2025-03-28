import { useState } from 'react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


function Appointments() {
  const [petName, setPetName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const navigate = useNavigate();

  const handleAppointment = () => {
    //alert(`Appointment booked for ${petName} on ${date} at ${time} for ${service}`);
    //alert(`service: ${service}`)
    if( service)
    navigate('/grooming');
    else
    // alert(`fill: ${petName?"petName ":""}${date?"date ":""}${service?"service ":""} details`)
  alert(`fill all details`)
  };

  return (
    <div className="flex justify-center items-center  p-4">
      <Card className="w-full max-w-lg p-4 shadow-lg rounded-lg">
        <CardHeader className="flex flex-col items-center">
          <img src="/doctor.webp" alt="Doctor" className="w-32 h-32 object-cover rounded-full mb-4" />
          <CardTitle className="text-2xl font-semibold text-green-700">Book an Appointment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-sm text-gray-700">Pet Name</Label>
            <Input placeholder="Enter your pet's name" value={petName} onChange={(e) => setPetName(e.target.value)} />
          </div>
          <div>
            <Label className="text-sm text-gray-700">Select Date</Label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <Label className="text-sm text-gray-700">Select Time</Label>
            <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <div>
            <Label className="text-sm text-gray-700">Service Type</Label>
            <Select onValueChange={(value) => setService(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vet Checkup">Vet Checkup</SelectItem>
                <SelectItem value="Grooming">Grooming</SelectItem>
                <SelectItem value="Vaccination">Vaccination</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 mb-3" onClick={handleAppointment}>Book Now</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Appointments;
