"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function AppNav() {
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
    <div className="w-1/3"></div>
    </div>
  );
}
