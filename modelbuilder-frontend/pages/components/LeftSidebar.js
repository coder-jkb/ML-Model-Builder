import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
    MdOutlineClose,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

function SideNavbar() {
    const [toggle, setToggle] = useState('hidden');
    const openLeftSide = () => {
        if (toggle === 'hidden') {
            setToggle('')
        }
        else {
            setToggle('hidden')
        }
    }

    return (
        <div>
            <button onClick={openLeftSide} className="absolute top-4 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                <GiHamburgerMenu
                    className="block h-6 w-6"
                    aria-hidden="true"
                />
            </button>
            <div className={`${toggle} p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 ease-in-out duration-500`}>
                <div className="flex flex-col justify-start item-center">
                    <h1 className="text-base flex justify-between items-center text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                        {/* <div className=""> */}
                        Sidebar
                        <button onClick={openLeftSide}>
                            <MdOutlineClose className="text-xl" />
                        </button>
                        {/* </div> */}
                    </h1>
                    <hr />
                    <div className=" my-4 border-b border-gray-100 pb-4">
                        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                Dashboard
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                Comments
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                Analytics
                            </h3>
                        </div>
                    </div>
                    <hr />
                    {/* setting  */}
                    <div className=" my-4 border-b border-gray-100 pb-4">
                        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                More Settings Here
                            </h3>
                        </div>
                    </div>
                    <hr />
                    {/* logout */}
                    <div className=" my-4">
                        <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                            <button className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNavbar;