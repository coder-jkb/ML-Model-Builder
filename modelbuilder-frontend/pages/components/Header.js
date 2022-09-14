import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className="md:fixed md:justify-center md:w-11/12 md:ml-16 md:z-50 text-white bg-gradient-to-b from-slate-900 to-slate-700 body-font bg-slate-900">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <Image src="/ModelUp_logo.png" className="rounded-lg" alt="logo" width={140} height={65} />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-3">
          {/* Changed from indig0-700 to indigo-500 */}
          <Link activeClass="active"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={100}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
            spyThrottle={500} to='features' className="py-1 px-2 cursor-pointer text-indigo-500 hover:border-b-2 hover:border-indigo-500">Features</Link>
          <Link activeClass="active"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={100}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
            spyThrottle={500} to='steps' className="py-1 px-2 cursor-pointer text-indigo-500 hover:border-b-2 hover:border-indigo-500">Steps</Link>
          <Link activeClass="active"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={100}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
            spyThrottle={500} to='contact' className="py-1 px-2 cursor-pointer text-indigo-500 hover:border-b-2 hover:border-indigo-500">Contact us</Link>
          {/* <button className="flex mx-auto text-white bg-indigo-500/[0.85] border-0 py-2 px-2 focus:outline-none hover:bg-indigo-500/[0.95] rounded text-lg">Start Modelling</button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
