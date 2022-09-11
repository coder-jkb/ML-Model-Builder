import React from "react";
import { MdOutlineAutoGraph } from 'react-icons/md';
const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-purple-900 mb-4 md:mb-0">
          {/* <MdOutlineAutoGraph className="text-3xl"/> */}
          <img src="/ModelUp_Logo.png" class="w-[7rem]" alt="logo" />
          {/* <span className="ml-3 text-xl">ModelUp</span> */}
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="py-1 px-3 rounded-md hover:text-purple-600 hover:bg-purple-100">First Link</a>
          <a className="py-1 px-3 rounded-md hover:text-purple-600 hover:bg-purple-100">Second Link</a>
          <a className="py-1 px-3 rounded-md hover:text-purple-600 hover:bg-purple-100">Third Link</a>
          <a className="py-1 px-3 mr-3 rounded-md hover:text-purple-600 hover:bg-purple-100">Fourth Link</a>
        </nav>
        <button className="inline-flex items-center mr-2 bg-transparent text-purple-600 border-2 border-purple-600 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded hover:text-white mt-4 md:mt-0">Login
        </button>
        <button className="inline-flex items-center bg-transparent text-purple-600 border-2 border-purple-600 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded hover:text-white mt-4 md:mt-0">Sign up
          {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
        </button>
      </div>
    </header>
  );
};

export default Header;
