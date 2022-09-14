import Image from "next/image";
import { GiCubes, GiPieChart, GiSettingsKnobs } from 'react-icons/gi';
import { IoMdAnalytics } from 'react-icons/io';
import { FaFileCode } from 'react-icons/fa';
import { TbChartInfographic } from 'react-icons/tb';
import React from "react";

const Step = () => {
    return (
        <section name='steps' className="text-white bg-gray-800 body-font">
            <div className="text-center pt-10 -mb-10">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Follow these simple steps or let it Automate itself</h1>
            </div>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 rounded-full inline-flex items-center justify-center">
                            <GiPieChart className="text-4xl text-indigo-800/[0.85]" />
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-white mb-1 text-xl">Do Exploatory Data Analysis</h2>
                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                </div>

                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                            <GiCubes className="text-4xl text-indigo-800/[0.85]" />
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-white mb-1 text-xl">Do Data Preprocessing</h2>
                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                            <IoMdAnalytics className="text-4xl text-indigo-800/[0.85]" />
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-white mb-1 text-xl">Do Model Building</h2>
                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                            <GiSettingsKnobs className="text-4xl text-indigo-800/[0.85]" />
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-white mb-1 text-xl">Do Hyperparameter Tuning</h2>
                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">5</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 rounded-full inline-flex items-center justify-center">
                            <TbChartInfographic className="text-4xl text-indigo-800/[0.85]" />
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-white mb-1 text-xl">Do Model Comparison</h2>
                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">6</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                            <FaFileCode className="text-4xl text-indigo-800/[0.85]" />
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-white mb-1 text-xl">Get the Code</h2>
                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step;
