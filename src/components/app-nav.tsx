"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getUserAttributes } from "@/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logoutUser } from "@/auth/auth";
import { useNavigate } from "react-router-dom";

export function AppNav() {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser(){
      let temp = await getUserAttributes();
      if (temp?.name) {
        const firstNameExtracted = temp.name.split(" ")[0] ?? ""; // Ensure it's never undefined
        setFirstName(firstNameExtracted);
      }
    }
    
    fetchUser();
  }, []);
  console.log(firstName)

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50 flex items-center px-16">
      {/* Left: Logo */}
      <div className="flex w-1/3">
        <Link to="/" className="flex items-center">
          <img src="/logo_no_border.svg" alt="Logo" className="h-10 w-10" />
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex w-1/3 justify-center">
    <NavigationMenu className="flex justify-center">
      <NavigationMenuList className="flex justify-center space-x-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/dashboard" className={navigationMenuTriggerStyle()}>
              Dashboard
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/applications" className={navigationMenuTriggerStyle()}>
              Applications
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/calendar" className={navigationMenuTriggerStyle()}>
              Calendar
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/settings" className={navigationMenuTriggerStyle()}>
              Settings
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    <div className='flex w-1/3 justify-end'>
      <DropdownMenu>
        <DropdownMenuTrigger >{firstName.toUpperCase()}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => {
            logoutUser();
            navigate("/login"); // Redirect user to login after logout
          }}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  );
}
