"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";

function Header() {
  const data = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Services", link: "/#serivces" },
    { id: 2, name: "Pricing", link: "/#pricing" },
    { id: 2, name: "Products", link: "/#product" },
    { id: 3, name: "About Us", link: "/about" },
  ];

  const [navOpen, setNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white z-50 bg-black/[0.3]">
      <div className="max-w-5xl mx-auto p-3 flex justify-between items-center ">
        <Image
          src={"/Vector.svg"}
          width={20}
          height={20}
          alt="logo"
          className="h-16 w-16 "
        />
        <div className="space-x-4 hidden md:block">
          {data.map((item) => (
            <Link key={item.id} href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
        {/* <div> */}
        <VscThreeBars
          size={45}
          className={
            !navOpen ? "flex ml-auto mr-3 md:hidden  rounded" : "hidden"
          }
          onClick={toggleNav}
        />
        <IoClose
          size={45}
          onClick={toggleNav}
          className={
            navOpen
              ? "flex ml-auto mr-3 md:hidden bg-white/[0.1] rounded"
              : "hidden"
          }
        />
        <div
          className={`md:hidden min-h-screen absolute top-[88px] right-0 bg-black w-[50%] transform transition-transform duration-500 ease-in-out ${
            navOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-2 p-2 min-h-screen  bg-white/[0.1] m-2 rounded z-50">
            {data.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="hover:bg-black p-3 rounded"
                onClick={toggleNav}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
