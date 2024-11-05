"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/iconbutton";
import Link from "next/link";
import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type Checked = DropdownMenuCheckboxItemProps["checked"];

const MobileFilters = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const About_Routes = [
    {
      href: "/aboutus/company-information",
      label: "Company Information",
      description: "Learn more about our company history and values.",
      active: pathname === "/aboutus/company-information",
    },

    {
      href: "/aboutus/our-exports",
      label: "Our Exports",
      description: "Discover our export operations and reach.",
      active: pathname === "/aboutus/our-exports",
    },
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
    },
  ];

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        <Plus size={15} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button>About Us</button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56">
                  {About_Routes.map((route) => (
                    <div key={route.label}>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                      >
                        <Link href={route.href}>{route.label}</Link>
                      </DropdownMenuCheckboxItem>
                    </div>
                  ))}
                </DropdownMenuContent>
                <DropdownMenuSeparator/>
                <DropdownMenuTrigger asChild>
                  <button>Products</button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {categoryRoutes.map((route) => (
                    <div key={route.label}>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                      >
                        <Link href={route.href}>{route.label}</Link>
                      </DropdownMenuCheckboxItem>
                    </div>
                  ))}
                </DropdownMenuContent>
                <DropdownMenuSeparator/>
                <DropdownMenuTrigger asChild>
                  <button>Catalogue</button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {eCatalogueRoutes.map((route) => (
                    <div key={route.label}>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                      >
                        <Link href={route.href}>{route.label}</Link>
                      </DropdownMenuCheckboxItem>
                    </div>
                  ))}
                </DropdownMenuContent>
                
                <DropdownMenuSeparator/>

              </DropdownMenu>
              <Link href='/contact'>Contact Us</Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
