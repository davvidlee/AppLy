"use client"

import * as React from "react";
import { Link } from "react-router-dom"; // Import Link
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function AppNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <Link to="/dashboard" className={navigationMenuTriggerStyle()}>
              Dashboard
            </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <Link to="/applications" className={navigationMenuTriggerStyle()}>
              Applications
            </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <Link to="/calendar" className={navigationMenuTriggerStyle()}>
              Calendar
            </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <Link to="/settings" className={navigationMenuTriggerStyle()}>
              Settings
            </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
