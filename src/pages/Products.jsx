import { useState } from 'react'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import productData from "../data/productData";
import { useNavigate } from "react-router-dom";

function Products( {cart, setCart} ) {

  const navigate = useNavigate();

  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (productName, callback) => {
    setClickedButton(productName);
    setTimeout(() => setClickedButton(null), 200); // Reset scale after 200ms
    if (callback) callback();
  };


  const handleAddToCart = (productName) => {
    setCart([...cart, productName]); // Add product to cart array
  };
  console.log(cart);

//  const cardstyle = 'cursor-pointer p-4 w-sm flex flex-col transition-transform duration-200 hover:scale-99';
  const cardstyle = 'p-4 w-[300px] flex flex-col transition-transform duration-200 hover:scale-[0.99]';

  const cardcontent = 'flex flex-col flex-grow';

  const buttonsection = 'flex mt-auto space-x-2';

  //const button = `transition transform duration-200 ease-out ${clicked ? 'scale-95' : 'scale-100'} mt-4 bg-green-600 text-white hover:bg-green-700 hover:scale-105`;
  const button = `cursor-pointer mt-4 bg-green-600 text-white hover:bg-green-700`;

  const price = 'text-lg font-semibold text-black mb-4';

    return (
      // <div className='flex-wrap'>
      <div className='flex flex-wrap justify-center gap-4 p-4'>
        
        {productData.map((product) => (
        <Card key={product.id} className={cardstyle} >
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <h2 className={price}>₹{product.price}/-</h2>
          </CardHeader>
          <CardContent className={cardcontent}>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
            <div className={buttonsection}>
              <Button
                className={`${button} transition-transform duration-100 ${
                  clickedButton === product.name ? "scale-85" : "scale-100"
                }`}
                onClick={() => {
                  handleClick(product.name);
                  navigate(`/buy/${product.id}`);
                }}
              >
                Buy Now
              </Button>
              <Button
                className={`${button} transition-transform duration-100 ${
                  clickedButton === product.name + "_cart" ? "scale-85" : "scale-100"
                }`}
                onClick={() => handleClick(product.name + "_cart", () => handleAddToCart(product.name))}
              >
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}




      </div>
    );
  }
  
  export default Products;