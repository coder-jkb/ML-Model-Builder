import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section name='#' className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border mb-10 md:mb-0 ml-5">
                    <Image className="object-cover object-center rounded" alt="hero" src="/aiHero.png" width={900} height={600} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        What is
                        <br className="hidden lg:inline-block" />
                        <span className="text-indigo-800/[0.85]"> ModelUp.ai</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, illum nobis nesciunt facere deleniti velit amet eum nam quasi ipsam commodi
                        porro animi quo soluta earum voluptatibus quam corporis debitis? Suscipit maiores consequuntur at, repellat laudantium nemo recusandae
                        maxime accusantium! Molestias id reiciendis libero optio voluptatibus, excepturi cumque eum!</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-800/[0.85] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800/[0.95] rounded text-lg">Sign up</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Login</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
