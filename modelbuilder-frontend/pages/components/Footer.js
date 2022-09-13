import React from "react";
import { ImGithub } from "react-icons/im";
import { GrLinkTop } from "react-icons/gr";
import Image from "next/image";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Image src="/ModelUp_logo.png" className="rounded-lg" alt="logo" width={100} height={50} />
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 ModelUp
                </p>
                <button className="text-gray-500 mx-5">
                    <ImGithub className="text-2xl" />
                </button>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    Scroll To Top
                    <Link to='#' activeClass="active"
                        spy={true} smooth={true} hashSpy={true}
                        offset={50} duration={500} delay={100} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500}
                        className="text-indigo-800 mx-5">
                        <GrLinkTop className="text-2xl" />
                    </Link>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
