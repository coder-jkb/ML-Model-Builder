import Image from "next/image";
import React from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <Image src="/ModelUp_logo.png" className="rounded-lg" alt="logo" width={140} height={65} />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-3">
          <Link activeClass="active" to="steps"
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
            spyThrottle={500} className="py-1 px-2 cursor-pointer text-indigo-700 hover:border-b-2 hover:border-indigo-700">Steps</Link>
          <Link to='features' activeClass="active"
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
            spyThrottle={500} className="py-1 px-2 cursor-pointer text-indigo-700 hover:border-b-2 hover:border-indigo-700">Features</Link>
          <Link to='contact' activeClass="active"
            spy={true} smooth={true} hashSpy={true}
            offset={50}
            duration={500}
            delay={100}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
            spyThrottle={500} className="py-1 px-2 cursor-pointer text-indigo-700 hover:border-b-2 hover:border-indigo-700">Contact us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
