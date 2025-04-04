import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})

  }

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to='/'><img src={assets.logo} className="w-70" alt="Logo" /></Link>

      {/* Navbar Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">

        {/* Profile Dropdown */}
        <div className="group relative">
          <img onClick={() => token ? null : navigate('/login')} className="w-5 sm:w-6 cursor-pointer" src={assets.profile_icon} alt="Profile" />
          {/* Dropdown Menu */}
          {token && <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-32 sm:w-36 py-3 px-4 sm:px-5 bg-custom-cream text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>}
        </div>

        {/* Search Icon */}
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 sm:w-6 cursor-pointer" alt="Search" />



        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 sm:w-6 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 sm:w-5 text-center leading-4 bg-black text-white aspect-square rounded-full text-[9px] sm:text-[10px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 sm:w-6 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 bg-white overflow-hidden transition-all ${visible ? 'w-3/4' : 'w-0'
          }`}
      >
        {/* Close Button */}
        <div
          className="flex items-center gap-4 p-3 cursor-pointer border-b"
          onClick={() => setVisible(false)}
        >
          <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Close Menu" />
          <p>Back</p>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col text-gray-700">
          <NavLink
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/"
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/collection"
            onClick={() => setVisible(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/about"
            onClick={() => setVisible(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/contact"
            onClick={() => setVisible(false)}
          >
            CONTACT
          </NavLink>
          <NavLink
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/login"
            onClick={() => {
              logout();
              setVisible(false);
            }}
          >
            Log Out
          </NavLink>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
