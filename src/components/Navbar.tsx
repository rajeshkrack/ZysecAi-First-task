"use client";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  
  const { data: session } = useSession(); // Get session data

  const [isMobileMenuOpen, SetIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    SetIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-[80%]">
      <div className="py-4 px-8 bg-white text-gray-900 shadow-lg rounded-2xl transition-all duration-300">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/">
              <span className="text-red-500">Daily</span>
              <span className="text-black">News</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex space-x-8">
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white hover:text-red-500 transition duration-300">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="bg-white shadow-md rounded-md py-4 px-5 space-y-2 w-48">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/web-development"
                          className="block text-gray-700 hover:text-red-500 transition duration-300"
                        >
                          Service 1
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/mobile-apps"
                          className="block text-gray-700 hover:text-red-500 transition duration-300"
                        >
                          Service 2
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-red-500 transition duration-300"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-red-500 transition duration-300"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            {/* Login/Logout Button */}
            {session ? (
              <Button onClick={() => signOut()} variant="default" className="px-6">
                Logout
              </Button>
            ) : (
              <Button onClick={() => signIn("google")} variant="default" className="px-6">
                Login
              </Button>
            )}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <Button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <AiOutlineClose size={24} className="transition duration-300 hover:scale-110" />
              ) : (
                <AiOutlineMenu size={24} className="transition duration-300 hover:scale-110" />
              )}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
