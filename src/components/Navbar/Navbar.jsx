import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import { FadeDown } from "../../utility/animation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <motion.div
          variants={FadeDown(0.1)}
          initial="hidden"
          animate="visible"
          className="container flex justify-between items-center py-8"
        >
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">Gym</p>
          </div>
          {/* Menu Section */}
          <div className="hidden md:block ">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch className="" />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin className="" />
            </button>
            <button className="hover:bg-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div>
          {/* Mobile hamburger menu Section */}
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer "
          >
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>

        {/* Mobile Sidebar section */}
        <ResponsiveMenu open={open} />
      </nav>
    </>
  );
};

export default Navbar;
