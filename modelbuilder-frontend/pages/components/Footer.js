import React from "react";
import { ImGithub } from "react-icons/im";
import { GrLinkTop } from "react-icons/gr";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-slate-100 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Image src="/ModelUp_logo.png" className="rounded-lg" alt="logo" width={100} height={50} />
                <p className="text-sm text-slate-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-slate-100 sm:py-2 sm:mt-0 mt-4">© 2022 ModelUp
                </p>
                <button className="text-slate-100 mx-5">
                    <ImGithub className="text-2xl" />
                </button>
                <span className="text-lg inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    Scroll To Top
                    <a href='#' className="text-indigo-800 mx-5">
                        <GrLinkTop className="text-4xl bg-slate-400 p-2 rounded-lg" />
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
