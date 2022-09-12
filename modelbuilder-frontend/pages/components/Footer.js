import React from "react";
import { MdOutlineAutoGraph } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Image src="/ModelUp_logo.png" className="rounded-lg" alt="logo" width={100} height={50} />
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 ModelUp
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
