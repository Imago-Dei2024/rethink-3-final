"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import Image from "next/image"; 

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
    subNav: [ 
      { name: "Our Mission", path: "/about#hero-mission"}, 
      { name: "Our Team", path: "/about#team" },
      { name: "Office Gallery", path: "/about#office-gallery" }
    ]
  },
  {
    name: "Services",
    path: "/services",
    subNav: [
      { name: "Integrative Psychiatry", path: "/services/integrative-psychiatry" },
      { name: "First Responder", path: "/services/first-responder" },
      { name: "Ketamine Therapy", path: "/services/ketamine" },
      { name: "Spravato", path: "/services/spravato" },
      { name: "Addiction Treatment", path: "/services/addiction" },
      { name: "Genetic Testing", path: "/services/genetic-testing" },
      { name: "QbTesting ADHD", path: "/services/qb-testing" },
      { name: "Nutrition Counseling", path: "/services/nutrition" },
    ]
  }, 
  { 
    name: "First Responders", 
    path: "/services/first-responder"
  },
  {
    name: "Wellness",
    path: "/wellness",
    subNav: [
      { name: "Thorne & Fullscript", path: "/wellness/links" },
      { name: "NAD+", path: "/wellness/nad" }
    ]
  },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "Reviews",
    path: "/reviews",
  },
  {
    name: "Contact",
    path: "/contact",
  }, 
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Modern Desktop Navigation inspired by Rivian and Shopify
  const DesktopNav = () => (
    <div className="hidden md:flex ml-10 items-center space-x-1">
      {navItems.map((item) => (
        <NavigationMenu key={item.name} className="mx-1">
          <NavigationMenuList>
            <NavigationMenuItem>
              {item.subNav ? (
                <>
                  <NavigationMenuTrigger 
                    className="text-neutral-700 hover:text-primary-600 dark:text-neutral-200 dark:hover:text-primary-400 font-medium transition-colors duration-200 px-3 py-2 rounded-md text-base"
                  >
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="animate-fade-in">
                    <ul className="grid w-[400px] gap-3 p-6 bg-white dark:bg-neutral-900 backdrop-blur-md rounded-xl shadow-lg">
                      <li className="mb-2 pb-2">
                        <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400">{item.name}</h4>
                      </li>
                      {item.subNav.map((subItem) => (
                        <li key={subItem.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.path}
                              className="group block select-none rounded-lg p-3 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-200">
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">{subItem.name}</div>
                                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Learn more</div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.path} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "text-neutral-700 hover:text-primary-600 dark:text-neutral-200 dark:hover:text-primary-400 font-medium transition-colors duration-200 px-3 py-2 rounded-md text-base hover:bg-neutral-100/50 dark:hover:bg-neutral-800/30"
                    )}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-neutral-900/95 shadow-sm border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group"> {/* This is the "ReThink Mental Health and Wellness" logo area on the far left of the nav bar*/}
              <Image
                src="/logo/ReThink-Logo.svg"
                alt="ReThink-Logo.svg"
                width={200}
                height={100}
                className="h-16 w-auto object-contain"
                priority // Add priority as it's likely LCP
                />
            </Link>
            <DesktopNav />
          </div>

          {/* Desktop menu extras */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+13031234567" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-sm font-medium">(303) 123-4567</span>
            </a>
          </div>

          {/* CTA Button - Modern */}
          <div className="hidden md:flex items-center">
            <Link
              href="/appointment"
              className="px-4 py-2 rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <span>Book Appointment</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button - Modern */}
          <div className="md:hidden flex items-center">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-md">
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800">
                <SheetHeader>
                  <SheetTitle>
                    <span className="sr-only">Mobile Navigation Menu</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="py-6 px-4 space-y-4">
                  {/* Logo in mobile menu - Modern */}
                  <div className="flex items-center mb-8">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="/logo/ReThink-Logo.svg"
                        alt="ReThink Mental Health and Wellness"
                        width={135}
                        height={36}
                        className="h-9 w-auto object-contain"
                      />
                    </Link>
                  </div>
                  {navItems.map((item) => (
                    <div key={item.name} className="py-1">
                      {item.subNav ? (
                        <div className="rounded-xl overflow-hidden bg-white/50 dark:bg-neutral-800/30 backdrop-blur-sm">
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="w-full text-left px-4 py-3 text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 flex justify-between items-center rounded-lg transition-colors duration-200"
                          >
                            <span>{item.name}</span>
                            <svg
                              className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                                activeDropdown === item.name ? "rotate-180" : ""
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {activeDropdown === item.name && (
                            <div className="pl-6 pr-2 py-2 space-y-1 bg-white/80 dark:bg-neutral-900/80 border-t border-neutral-200 dark:border-neutral-800 animate-fade-in">
                              {item.subNav.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className="block px-4 py-2.5 text-sm rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 flex items-center"
                                >
                                  <div className="h-1 w-1 rounded-full bg-primary-500 mr-2"></div>
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.path}
                          className="block px-4 py-3 text-base font-medium rounded-lg text-neutral-800 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800/50 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-6 mt-2 border-t border-neutral-200 dark:border-neutral-800">
                    <Link
                      href="/appointment"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-200 text-base"
                    >
                      <span>Book Appointment</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </Link>
                    
                    <div className="flex justify-center mt-6">
                      <a 
                        href="tel:+13031234567" 
                        className="text-primary-600 dark:text-primary-400 flex items-center gap-2 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm font-medium">(303) 123-4567</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}