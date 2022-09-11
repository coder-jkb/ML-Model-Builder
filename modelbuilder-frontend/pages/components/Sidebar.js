import React from "react";
import { MdOutlineDashboard } from 'react-icons/md'
const Sidebar = () => {
    return (
        <div className="md:w-1/5 w-11/12 h-screen shadow-2xl">
            <div className="border p-5 flex justify-around">
                <p className="text-lg ">Logo</p>
                <p>|</p>
                <p className="text-gray-900 text-xl">Model Builder</p>
            </div>
            <hr />
            <div className="p-4 space-y-16">
                <div className="space-y-4">
                    <h2 className="text-gray-500">Heading 1</h2>
                    <div className="flex space-x-2 items-center cursor-pointer hover:text-blue-600">
                        {/* <MdOutlineDashboard /> */}
                        <p>Logo</p>
                        <p className="text-lg">Sub Heading 1</p>
                    </div>
                    <div className="flex space-x-2 items-center cursor-pointer hover:text-blue-600">
                        {/* <MdOutlineDashboard /> */}
                        <p>Logo</p>
                        <p className="text-lg">Sub Heading 2</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-gray-500">Heading 2</h2>
                    <div className="flex space-x-2 items-center cursor-pointer hover:text-blue-600">
                        {/* <MdOutlineDashboard /> */}
                        <p>Logo</p>
                        <p className="text-lg">Sub Heading 1</p>
                    </div>
                    <div className="flex space-x-2 items-center cursor-pointer hover:text-blue-600">
                        {/* <MdOutlineDashboard /> */}
                        <p>Logo</p>
                        <p className="text-lg">Sub Heading 2</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-gray-500">Heading 3</h2>
                    <div className="flex space-x-2 items-center cursor-pointer hover:text-blue-600">
                        {/* <MdOutlineDashboard /> */}
                        <p>Logo</p>
                        <p className="text-lg">Sub Heading 1</p>
                    </div>
                    <div className="flex space-x-2 items-center cursor-pointer hover:text-blue-600">
                        {/* <MdOutlineDashboard /> */}
                        <p>Logo</p>
                        <p className="text-lg">Sub Heading 2</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="p-4 flex justify-around">
                <button className="border p-2 text-gray-900">Login</button>
                <button className="border p-2 text-gray-900">Sign Up</button>
            </div>
        </div>
    );
};

export default Sidebar;
