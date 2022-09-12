import Image from "next/image";
import React from "react";
const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <Image src="/ModelUp_logo.png" className="rounded-lg" alt="logo" width={140} height={65} />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="py-1 px-2 cursor-pointer text-indigo-700 hover:border-b-2 hover:border-indigo-700">First Link</a>
          <a className="py-1 px-2 cursor-pointer text-indigo-700 hover:border-b-2 hover:border-indigo-700">Second Link</a>
          <a className="py-1 px-2 cursor-pointer text-indigo-700 hover:border-b-2 hover:border-indigo-700">Third Link</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
