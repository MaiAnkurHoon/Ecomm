"use client"
import React from "react";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNavbarLinks =  () => {
    const pathname = usePathname()
    const About_Routes = [
      {
        href: "/aboutus/companyinformation",
        label: "Company Information",
        description: "Learn more about our company history and values.",
        active: pathname === "/aboutus/companyinformation",
      },
      
      {
        href: "/aboutus/exports",
        label: "Our Exports",
        description: "Discover our export operations and reach.",
        active: pathname === "/aboutus/exports",
      }
    ];
    const categoryRoutes = [
      {
        href: "/category/glazed-vitrified-tiles",
        label: "Glazed Vitrified Tiles",
        description: "Durable and stylish glazed tiles.",
        active: pathname === "/category/glazed-vitrified-tiles",
      },
      {
        href: "/category/grestough-floor-tiles",
        label: "Grestough Floor Tiles",
        description: "Premium grestough floor tiles.",
        active: pathname === "/category/grestough-floor-tiles",
      },
      {
        href: "/category/polished-vitrified-tiles",
        label: "Polished Vitrified Tiles",
        description: "Shiny and polished vitrified tiles.",
        active: pathname === "/category/polished-vitrified-tiles",
      },
      {
        href: "/category/ceramic-wall-tiles",
        label: "Ceramic Wall Tiles",
        description: "Ceramic tiles for walls.",
        active: pathname === "/category/ceramic-wall-tiles",
      },
      {
        href: "/category/tile-adhesives",
        label: "Tile Adhesives",
        description: "Reliable adhesives for tiles.",
        active: pathname === "/category/tile-adhesives",
      },
    
      // Wall Tiles Section
      // {
      //   href: "/category/wall-tiles/bathroom-wall-tiles",
      //   label: "Bathroom Wall Tiles",
      //   description: "Tiles for bathroom walls.",
      //   active: pathname === "/category/wall-tiles/bathroom-wall-tiles",
      // },
      // {
      //   href: "/category/wall-tiles/kitchen-wall-tiles",
      //   label: "Kitchen Wall Tiles",
      //   description: "Tiles for kitchen walls.",
      //   active: pathname === "/category/wall-tiles/kitchen-wall-tiles",
      // }
    ];
    const eCatalogueRoutes = [
      {
        href: "/catalogue/eternity-glazed-vitrified-tiles",
        label: "Eternity - Glazed Vitrified Tiles",
        description: "Durable and stylish glazed vitrified tiles.",
        active: pathname === "/catalogue/eternity-glazed-vitrified-tiles",
      },
      {
        href: "/catalogue/grestough-floor-tiles",
        label: "Grestough Floor Tiles",
        description: "High-quality floor tiles.",
        active: pathname === "/catalogue/grestough-floor-tiles",
      },
      {
        href: "/catalogue/polished-vitrified-tiles",
        label: "Polished Vitrified Tiles",
        description: "Smooth and polished vitrified tiles.",
        active: pathname === "/catalogue/polished-vitrified-tiles",
      },
      {
        href: "/catalogue/ceramic-wall-tiles",
        label: "Ceramic Wall Tiles",
        description: "Tiles for walls in various designs.",
        active: pathname === "/catalogue/ceramic-wall-tiles",
      }]
    
    return ( 
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><p className="text-lg">About Us</p></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-slate-200">
              <li className="row-span-3">
                
              </li>
              {About_Routes.map((route) => (
                <ListItem
                  key={route.href}
                  title={route.label}
                  href={route.href}
                  >{route.description}</ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger><p className="text-lg">Products</p></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-200 ">
              {categoryRoutes.map((component) => (
                <ListItem
                  key={component.label}
                  title={component.label}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger><p className="text-lg">Catalogue</p></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-200">
              {eCatalogueRoutes.map((component) => (
                <ListItem
                  key={component.label}
                  title={component.label}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Link href="/contactus">
            <p className="text-lg">Contact Us</p>
            </Link>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/store" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <p className="text-lg">Store</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

 
export default MainNavbarLinks;


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"