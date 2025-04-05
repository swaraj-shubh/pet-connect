import { Link, useLocation } from 'react-router-dom';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

function Header() {

    const location = useLocation();

    const getLinkClass = (path) =>
        `text-gray-1000 hover:shadow-2xl shadow-black hover:text-black hover:font-medium transition-transform duration-1000 hover:scale-105 ${
          location.pathname === path ? "text-black font-bold" : ""
        }`;


  return (
    <header className="bg-green-500 rounded-b-sm shadow-2xl">
      <div className="container flex items-center justify-between p-4 mx-auto">
        
        <Link to="/" className="flex items-center gap-2">
          <img src="/bithound.svg" alt="PetConnect Logo" className='w-10 h-10 hover:scale-105' />
          <h1 className="text-2xl font-bold hover:scale-105">PetConnect</h1>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
          
          {/* <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  shubham
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/products" className={getLinkClass("/products")}>
                  Products
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>  */}


        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/home" className={getLinkClass("/home")}>Home</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/products" className={getLinkClass("/products")}>Products</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/appointments" className={getLinkClass("/appointments")}>Appointments</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/grooming" className={getLinkClass("/grooming")}>Grooming</Link>
            </NavigationMenuLink>
        </NavigationMenuItem> */}

        {/* <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/events" className={getLinkClass("/events")}>Events</Link>
            </NavigationMenuLink>
        </NavigationMenuItem> */}

        {/* <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/adoption" className={getLinkClass("/adoption")}>Adoption</Link>
            </NavigationMenuLink>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/profile" className={getLinkClass("/profile")}><img className='w-8 h-8' src="/profile.png" alt="" /></Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/settings" className={getLinkClass("/settings")}><img className='w-8 h-8' src="/setting.png" alt="" /></Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

export default Header;
