import Image from "next/image";
import React from "react";
const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <Image src="/ModelUp_logo.png" className="rounded-lg" alt="logo" width={140} height={65} />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-3">
          <a href='#steps' className="py-1 px-2 cursor-pointer text-indigo-700 hover:border-b-2 hover:border-indigo-700">Steps</a>
          <a href='#features' className="py-1 px-2 cursor-pointer text-indigo-700 hover:border-b-2 hover:border-indigo-700">Features</a>
          <a href='#contact' className="py-1 px-2 cursor-pointer text-indigo-700 hover:border-b-2 hover:border-indigo-700">Contact us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
