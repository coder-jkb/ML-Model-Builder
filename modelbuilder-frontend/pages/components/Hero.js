import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
    const [showSignUp, setShowSignUp] = useState('hidden');
    const [showLogin, setShowLogin] = useState('hidden');
    
    const toggleSignUp = () =>{ 
        if(showSignUp === 'hidden'){
            setShowSignUp('')
        }
        else{
            setShowSignUp('hidden')
        }
    }
    const toggleLogin = () =>{ 
        if(showLogin === 'hidden'){
            setShowLogin('')
        }
        else{
            setShowLogin('hidden')
        }
    }
    return (
        <>

            {/* <!-- Modal toggle --> */}
            {/* 
            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
                Toggle modal
            </button> 
            */}

            {/* <!-- Login modal --> */}
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`${showLogin} justify-center items-center fixed z-50 md:inset-0 h-modal md:h-full flex h-full w-full bg-indigo-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10`}>
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={toggleLogin} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Login to ModelUp</h3>
                            <form className="space-y-6" action="/login" method="POST">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" name="login_email" id="login_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="login_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                    <input type="password" name="login_password" id="login_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                                </div>
                                {/* <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                    <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                </div> */}
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                                {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signup Modal */}
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`${showSignUp} justify-center items-center fixed z-50 md:inset-0 h-modal md:h-full flex h-full w-full bg-indigo-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10`}>
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={toggleSignUp} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create an account</h3>

                            <form className="space-y-6" action="/signup" method="POST">
                                
                                <div>
                                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                                    <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John" required="" />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                                    <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Doe" required="" />
                                </div>
                                <div>
                                    <label htmlFor="signup_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" name="signup_email" id="signup_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="johndoe@mail.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="signup_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Set password</label>
                                    <input type="password" name="signup_password" id="signup_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                                </div>
                                <div>
                                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                                    <input type="password" name="confirm_password" id="confirm_password " placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                                </div>
                                {/* <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                    <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                </div> */}
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
                                
                                {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <section id='#' className="text-white bg-gray-800 body-font -mt-1">
                <div className="container mx-auto lg:mt-10 flex px-5 py-24 md:flex-row flex-col items-center">
                    {/* Removed border of image */}
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-5">
                        <Image className="object-cover object-center rounded" alt="hero" src="/aiHero.png" width={900} height={600} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center lg:mr-10">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            What is
                            <br className="hidden lg:inline-block" />
                            {/* indigo-500 changed to 500 */}
                            <span className="text-indigo-500/[0.85]"> ModelUp.ai</span>
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, illum nobis nesciunt facere deleniti velit amet eum nam quasi ipsam commodi
                            porro animi quo soluta earum voluptatibus quam corporis debitis? Suscipit maiores consequuntur at, repellat laudantium nemo recusandae
                            maxime accusantium! Molestias id reiciendis libero optio voluptatibus, excepturi cumque eum!</p>
                        <div className="flex justify-center">
                            <button onClick={toggleSignUp} className="inline-flex text-white bg-indigo-500/[0.85] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500/[0.95] rounded text-lg">
                                Sign up
                            </button>

                            {/* Changed login button (old login is commented) */}
                            <button onClick={toggleLogin} className="ml-4 inline-flex text-indigo-400 border-2 border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-500/[0.95] hover:text-white rounded text-lg" type="button" data-modal-toggle="authentication-modal">
                                Login
                            </button>
                            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Login</button> */}
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    );
};

export default Hero;
