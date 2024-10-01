import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoIosAddCircle } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' , text1:'Home' ,Link:'/Make-in-India'},
    { id: 2, text: 'About' ,text1:"About" ,Link:'/About' },
    { id: 3, text: <IoIosHeart /> ,text1:"Fav" ,Link:'/Fav8' },
    { id: 4, text: <FaShoppingCart /> ,text1:"MyCart" ,Link:'/orderCart'},
    { id: 5, text: <IoIosAddCircle />,text1:"Add"  ,Link:'/MyBusiness'}
  ];

  return (
    <div className='text-black flex justify-between items-center h-24 w-auto mx-auto px-4 md:text-white'>
      {/* Logo */}


      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>

        {navItems.map(item => (
          <Link to={`${item.Link}`}>
          <li
            key={item.id}
            className='text-black p-2 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text1}
          </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-auto h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out  duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-auto text-3xl font-bold text-[#00df9a] m-4'>Make in Bharat</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={`${item.Link}`}>
          <li
            key={item.id}
            className='text-white p-2 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
