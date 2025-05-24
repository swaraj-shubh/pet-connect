import { useParams } from "react-router-dom";
import productData from "../data/productData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";


function Buy() {
  const { productId } = useParams();
  const product = productData.find((item) => item.id === parseInt(productId));
  //const [isFullscreen, setIsFullscreen] = useState(false);

  if (!product) return <div>Product not found</div>;

//   const toggleFullscreen = () => {
//     setIsFullscreen(!isFullscreen);
//   };


  return (
    <div className="flex justify-center p-10">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <h2 className="text-lg text-gray-700 font-semibold">₹{product.price}/-</h2>
        </CardHeader>
        <CardContent className='flex flex-col md:flex-row gap-6'>
        <div className="w-full md:w-1/2">
            <img src={product.image} alt={product.name} className="w-full rounded-xl mb-4" />
        </div>  
        <div className="w-full md:w-1/2 flex flex-col justify-between items-end">
            <p className="mb-4 text-lg self-end">{product.description}</p>
            <Button className="bg-green-600 text-white hover:bg-green-700 self-end">Buy</Button>
        </div>
        </CardContent>
      </Card>


      {/* Fullscreen Image Overlay
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={toggleFullscreen}
        >
          <img
            src={product.image}
            alt="Full screen"
            className="max-w-full max-h-full object-contain cursor-pointer"
          />
        </div>
      )} */}


    </div>
  );
}

export default Buy;
