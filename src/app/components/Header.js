"use client";

import { useContext, useEffect, useState } from "react";

// next image
import Image from "next/image";

// react scroll
import { Link as ScrollLink } from "react-scroll";

import Link from "next/link";

// components
import SearchMobile from "./SearchMobile";

// media query
import { useMediaQuery } from "react-responsive";

// icons
import { BiMenuAltRight, BiX } from "react-icons/bi";

// search context
import { SearchContext } from "../context/search";

import { FaShoppingCart } from "react-icons/fa";

import CartContext from "../context/cart";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);
  const { cart } = useContext(CartContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      // Header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      // search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-black py-2 shadow-md" : "bg-black shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* logo */}
          <ScrollLink
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={"/icons/logo.jpeg"} width={100} height={40} alt="" />
          </ScrollLink>
          {/* nav open menu */}
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-black gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row navbar-main
           xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <ScrollLink
            to="home"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="cars"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Cars
          </ScrollLink>
          <ScrollLink
            to="about"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="why"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why us
          </ScrollLink>
          <ScrollLink
            to="testimonial"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </ScrollLink>
          <ScrollLink
            to="contact"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="/"
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all cars
          </ScrollLink>
          <Link href ="/cart">
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-white text-2xl" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-semibold rounded-full w-3 h-3 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
          <SearchMobile />
        </nav>
        </div>
    </header>
  );
}
