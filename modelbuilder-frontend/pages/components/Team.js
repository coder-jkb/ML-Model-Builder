import React from "react";
import { FaUserAlt } from 'react-icons/fa'
import { ImGithub, ImLinkedin } from "react-icons/im";
const Team = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them.</p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    <div className="p-4 lg:w-5/12">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <FaUserAlt className="text-3xl" />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Jay Bhanushali</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, architecto!</p>
                                <span className="inline-flex">
                                    <a className="ml-2 text-gray-500">
                                        <ImGithub className="text-2xl" />
                                    </a>
                                </span>
                                <span className="inline-flex mx-2">
                                    <a className="ml-2 text-gray-500">
                                        <ImLinkedin className="text-2xl" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-5/12">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <FaUserAlt className="text-3xl" />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Umang Lodaya</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, architecto!</p>
                                <span className="inline-flex">
                                    <a className="ml-2 text-gray-500">
                                        <ImGithub className="text-2xl" />
                                    </a>
                                </span>
                                <span className="inline-flex mx-2">
                                    <a className="ml-2 text-gray-500">
                                        <ImLinkedin className="text-2xl" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-5/12">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <FaUserAlt className="text-3xl" />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Pushkar Waykole</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, architecto!</p>
                                <span className="inline-flex">
                                    <a className="ml-2 text-gray-500">
                                        <ImGithub className="text-2xl" />
                                    </a>
                                </span>
                                <span className="inline-flex mx-2">
                                    <a className="ml-2 text-gray-500">
                                        <ImLinkedin className="text-2xl" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-5/12">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <FaUserAlt className="text-3xl" />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Neil Mehta</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, architecto!</p>
                                <span className="inline-flex">
                                    <a className="ml-2 text-gray-500">
                                        <ImGithub className="text-2xl" />
                                    </a>
                                </span>
                                <span className="inline-flex mx-2">
                                    <a className="ml-2 text-gray-500">
                                        <ImLinkedin className="text-2xl" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    );
};

export default Team;
