import Image from "next/image";
import React from "react";
const Header = () => {
  return (
    <header className="text-white bg-slate-900 body-font">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <Image src="/ModelUp_logo.png" className="rounded-lg" alt="logo" width={140} height={65} />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-3">
          {/* Changed from indig0-700 to indigo-500 */}
          <a href='#steps' className="py-1 px-2 cursor-pointer text-indigo-500 hover:border-b-2 hover:border-indigo-500">Steps</a>
          <a href='#features' className="py-1 px-2 cursor-pointer text-indigo-500 hover:border-b-2 hover:border-indigo-500">Features</a>
          <a href='#contact' className="py-1 px-2 cursor-pointer text-indigo-500 hover:border-b-2 hover:border-indigo-500">Contact us</a>
          {/* <button className="flex mx-auto text-white bg-indigo-500/[0.85] border-0 py-2 px-2 focus:outline-none hover:bg-indigo-500/[0.95] rounded text-lg">Start Modelling</button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
