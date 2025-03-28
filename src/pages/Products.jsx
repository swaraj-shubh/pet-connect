import { useState } from 'react'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Products() {

  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);  // Reset scale after 200ms
    if (onClick) onClick(e);
  };

  const cardstyle = 'cursor-pointer p-4 w-sm flex flex-col transition-transform duration-200 hover:scale-99';

  const cardcontent = 'flex flex-col flex-grow';

  const buttonsection = 'flex mt-auto space-x-2';

  //const button = `transition transform duration-200 ease-out ${clicked ? 'scale-95' : 'scale-100'} mt-4 bg-green-600 text-white hover:bg-green-700 hover:scale-105`;
  const button = `cursor-pointer mt-4 bg-green-600 text-white hover:bg-green-700 hover:scale-105`;

  const price = 'text-lg font-semibold text-black mb-4';

    return (
      // <div className='flex-wrap'>
      <div className='flex flex-wrap gap-4 p-4 justify-center'>
        <Card className={cardstyle}>
          <CardHeader>
            <CardTitle>Pet Food</CardTitle>
            <h2 className={price}>₹836/-</h2>
          </CardHeader>
          <CardContent className={cardcontent}>
          
            <p>Himalaya Healthy Pet Food | Meat & Rice Flavor | Adult | Complete & Balanced Nutrition for Dogs | 3 kg Pack</p>
              <img src="https://i5.walmartimages.com/seo/Himalaya-Healthy-PET-food-Puppy-1-2-Kg_32980fad-fcff-46ab-9ac8-438aa4ec9195.cdee9847905dee728962b6d30c775d72.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="" />
            <div className={buttonsection}>
              <Button className={button}>Buy Now</Button>
              <Button className={button}>Add to Cart</Button>
            
            {/* <Button className={button} onClick={handleClick}>Add to Cart</Button> */}
            </div>
          </CardContent>
        </Card>

        <Card className={cardstyle}>
        <CardHeader>
          <CardTitle>Pedigree</CardTitle>
          <h2 className={price}>₹621/-</h2>
        </CardHeader>
        <CardContent className={cardcontent}>
          <p>Pedigree Adult Dry Dog Food, Chicken & Vegetables, 3 kg, Contains 37 Essential Nutrients, 100% Complete & Balanced Food for Adult Dogs</p>
            <img src="https://m.media-amazon.com/images/I/41hmg1Ku4EL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            <div className={buttonsection}>
            <Button className={button}>Buy Now</Button>
            <Button className={button}>Add to Cart</Button>
          </div>
        </CardContent>
        </Card>

        <Card className={cardstyle}>
        <CardHeader>
          <CardTitle>Stainless Steel Bowl</CardTitle>
          <h2 className={price}>₹349/-</h2>
        </CardHeader>
        <CardContent className={cardcontent}>
          <p>amazon basics 2 In1 Pet Feeder Food and Water Dispenser|Stainless Steel Bowl|Automatic Water Dispensing Mechanism|Suitable for Cats and Dogs,?32 cm,H_22 cm,W_16.5 cm</p>
            <img src="https://m.media-amazon.com/images/I/51iD4gjpJaL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
          <div className={buttonsection}>
          <Button className={button}>Buy Now</Button>
          <Button className={button}>Add to Cart</Button>
          </div>
        </CardContent>
        </Card>

        <Card className={cardstyle}>
        <CardHeader>
          <CardTitle>Steam Brush</CardTitle>
          <h2 className={price}>₹261/-</h2>
        </CardHeader>
        <CardContent className={cardcontent}>
          <p>3 In1 Pet Steam Brush - One-Touch Spray Pet Hair Removal Tool 360°Rotating Handle Cat Brush With Steam Silicone Massage Comb Cat Brush For Shedding Multifunctional Dog Hair Brush</p>
            <img src="https://m.media-amazon.com/images/I/61x521riz7L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
            <div className={buttonsection}>
            <Button className={button}>Buy Now</Button>
            <Button className={button}>Add to Cart</Button>
          </div>
        </CardContent>
        </Card>

        <Card className={cardstyle}>
        <CardHeader>
          <CardTitle>Wet Wipes</CardTitle>
          <h2 className={price}>₹188/-</h2>
        </CardHeader>
        <CardContent className={cardcontent}>
          <p>PUPPEE Wipe ME 100% Biodegradable 96 Count (Pack of 2) Wet Wipes for Dogs, Cats & All Pets | Lavender Essential, Vitamin E & Olive Oil | Anti-Bacterial | Cleansing, Deodorising & Grooming Wipes</p>
            <img src="https://m.media-amazon.com/images/I/71dDrG6kN-L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
            <div className={buttonsection}>
            <Button className={button}>Buy Now</Button>
            <Button className={button}>Add to Cart</Button>
          </div>
        </CardContent>
        </Card>

        
        <Card className={cardstyle}>
        <CardHeader>
          <CardTitle>Dry Chicken and Egg</CardTitle>
          <h2 className={price}>₹747/-</h2>
        </CardHeader>
        <CardContent className={cardcontent}>
          <p>Drools Adult Dry Dog Food Chicken and Egg, 3kg with Free 1.2kg, Total 4.2 kg Pack</p>
            <img src="https://m.media-amazon.com/images/I/71o84Bphv-L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
            <div className={buttonsection}>
            <Button className={button}>Buy Now</Button>
            <Button className={button}>Add to Cart</Button>
          </div>
        </CardContent>
        </Card>

        
        <Card className={cardstyle}>
        <CardHeader>
          <CardTitle>Body Belt</CardTitle>
          <h2 className={price}>₹477/-</h2>
        </CardHeader>
        <CardContent className={cardcontent}>
          <p>PetVogue Dog No Pull Harness Body Belt | Reflective Dog Vest Oxford Fabric | Soft Padded Easy Control Dog Chest Neck Belt | No More Pulling Or Choking | for Small Medium Large Dogs - Size-Small, Red</p>
            <img src="https://m.media-amazon.com/images/I/61jc-DPxKSL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
            <div className={buttonsection}>
            <Button className={button}>Buy Now</Button>
            <Button className={button}>Add to Cart</Button>
          </div>
        </CardContent>
        </Card>

        
        <Card className={cardstyle}>
        <CardHeader>
          <CardTitle>Multipurpose Pet Bowls for Dogs</CardTitle>
          <h2 className={price}>₹612/-</h2>
        </CardHeader>
        <CardContent className={cardcontent}>
          <p>Eha Earth-Friendly 2 in 1 Multipurpose Pet Bowls for Dogs | Steel Dog Bowl | 1200 ml | Pet Bowl Made with Rice Husk & Bamboo Fibers | Dog Food Bowl | 1 Unit | Sand Castle</p>
            <img src="https://m.media-amazon.com/images/I/31E7PswD0lL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            <div className={buttonsection}>
            <Button className={button}>Buy Now</Button>
            <Button className={button}>Add to Cart</Button>
          </div>
        </CardContent>
        </Card>

        
        <Card className={cardstyle}>
        <CardHeader>
          <CardTitle>Collar Set</CardTitle>
          <h2 className={price}>₹149/-</h2>
        </CardHeader>
        <CardContent className={cardcontent}>
          <p>Agirav No Pull Dog Harness - Step in Dog Harness and Leash for Small Medium Large Dog - Escape Proof Adjustable Soft Leash Collar Set for Walking Training Hiking Outdoor, 15 Cm, 15 Cm</p>
            <img src="https://m.media-amazon.com/images/I/51ez5oWoCSL._SY450_.jpg" alt="" />
            <div className={buttonsection}>
            <Button className={button}>Buy Now</Button>
            <Button className={button}>Add to Cart</Button>
          </div>
        </CardContent>
        </Card>

        
        <Card className={cardstyle}>
        <CardHeader>
          <CardTitle>Biscuit</CardTitle>
          <h2 className={price}>₹402/-</h2>
        </CardHeader>
        <CardContent className={cardcontent}>
          <p>Meat Up Dog Treats Biscuit Real Chicken Flavour, All Life Stages, 1Kg ,Total 2 Kg Pack</p>
            <img src="https://m.media-amazon.com/images/I/51s+T+8Rb6L._SY300_SX300_.jpg" alt="" />
            <div className={buttonsection}>
            <Button className={button}>Buy Now</Button>
            <Button className={button}>Add to Cart</Button>
          </div>
        </CardContent>
        </Card>

        
        <Card className={cardstyle}>
        <CardHeader>
          <CardTitle>Brush</CardTitle>
          <h2 className={price}>₹261/-</h2>
        </CardHeader>
        <CardContent className={cardcontent}>
          <p>3 In1 Pet Steam Brush - One-Touch Spray Pet Hair Removal Tool 360°Rotating Handle Cat Brush With Steam Silicone Massage Comb Cat Brush For Shedding Multifunctional Dog Hair Brush</p>
            <img src="https://m.media-amazon.com/images/I/61x521riz7L._SY355_.jpg" alt="" />
            <div className={buttonsection}>
            <Button className={button}>Buy Now</Button>
            <Button className={button}>Add to Cart</Button>
          </div>
        </CardContent>
        </Card>
      </div>
    );
  }
  
  export default Products;