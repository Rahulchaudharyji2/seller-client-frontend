import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";

const Landing_Nav: React.FC = () => {
  const scrollToReviews = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('reviews-section');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar flex justify-between items-center px-7 py-5">
      <h1 className="text-2xl font-bold md:text-3xl">ClothBuddy</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link
          href="/signup"
          className="bg-black hover:bg-[#252525] text-white font-bold py-2 px-4 rounded-full"
        >
          Sell with us
        </Link>
        <Link 
          href="#reviews-section" 
          onClick={scrollToReviews}
          className="text-lg font-normal hover:underline"
        >
          Success Stories
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden">
        <DropdownMenu  >
          <DropdownMenuTrigger asChild>
            <button aria-label="Open menu" className="text-xl">
              <i className="ri-menu-3-line font-bold"></i>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-white border border-gray-200 shadow-lg">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/signup">Sell with us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link 
                href="#reviews-section" 
                onClick={scrollToReviews}
              >
                Success Stories
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Landing_Nav;
