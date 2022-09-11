import React from "react";
import { MdOutlineAutoGraph } from "react-icons/md";
import { ImGithub } from "react-icons/im";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center text-purple-900 mb-4 md:mb-0">
                    <MdOutlineAutoGraph className="text-3xl" />
                    <span className="ml-3 text-xl">ModelUp</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 ModelUp —
                    <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@OurName</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <button className="text-gray-500">
                        <ImGithub className="text-2xl" />
                    </button>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
