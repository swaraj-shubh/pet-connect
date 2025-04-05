import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


function Login({enter, setEnter}) {

    useEffect(() => {
        setEnter(0);
    }, [setEnter]);

  const navigate = useNavigate();

  const handleGuest = () => {
    setEnter(1);
    navigate("/home");
  };

  const handleLogin = (e) => {
    
    e.preventDefault();
    setEnter(1);
    // Add authentication logic here
    navigate("/home");
  };

//   const handleSignup = () => {
//     navigate("/signup");
//   };

  const handleSignup = (e) => {
    e.preventDefault();
    setEnter(1);
    // handle signup
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center mt-40">
      <Card className="w-full max-w-md p-4 shadow-xl rounded-2xl">
        <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold text-gray-800">
              Welcome to <span className="text-green-600">PetConnect</span>
            </CardTitle>        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger className='cursor-pointer' value="login">Login</TabsTrigger>
              <TabsTrigger className='cursor-pointer' value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Password" required />
                <Button type="submit" className="w-full text-white bg-green-600 cursor-pointer hover:bg-green-700">
                  Log In
                </Button>
              </form>
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="flex flex-col gap-4">
                <Input type="text" placeholder="Full Name" required />
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Password" required />
                <Button type="submit" className="w-full text-white bg-green-600 cursor-pointer hover:bg-green-700">
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <Button variant="outline" className="w-full text-white bg-blue-600 cursor-pointer hover:bg-blue-800 hover:text-white" onClick={handleGuest}>
              Continue as Guest
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
