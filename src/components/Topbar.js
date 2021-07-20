import React from 'react';
import lookmark from "../Images/logo-bookmark.svg"
import illustration from "../Images/illustration-features-tab-1.svg";



const Topbar = () => {
    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 xl:px-6">
                <div className="flex justify-between items-end py-6 md:justify-start md:space-x-10">
                    {/* <div className="flex justify-start lg:w-0 lg:flex-1"></div> */}
                    <a href="/">
                        <span className="pl-8 mg-0 font-black">
                        </span>
                        <img src={lookmark} alt=""className="h-full rounded mb-2- shadow"/>
                    </a>
                    <div className="hidden md:flex justify-end md:flex-1 lg:flex justify-end lg:flex-1">
                        <div className="hidden md:flex md:ml-20 md:pr-4 md:space-x-3 relative justify-end">
                            <a href="/" className="font-medium text-gray-500 hover:text-gray-900 xl:flex place-items-start  justify-end md:flex-4 ">Features</a>
                            <a href="/" className="font-medium text-gray-500 hover:text-gray-900 xl:flex items-center justify-end md:flex-2 ">Pricing</a>
                            <a href="/" className="font-medium text-gray-500 hover:text-gray-900 xl:flex items-center justify-end md:flex-4 ">Contact</a>
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500 xl:flex items-center justify-end md:flex-4 ">Log in</a>
                        </div>
                    </div>
                    
                </div>
            <div>
                <section>
                    <main className="grid lg:grid-cols-2 my-20 gap-40">
                        <div className="lg:text-left lg:text-left">
                            <h1 className=" mt-20 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-100xl sm:text-100xl">
                                <span className="block xl:inline md:flex-shrink-5">
                                    A Simple Bookmark Manager
                                </span>
                            </h1>
                            <p className="mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-100xl sm:mx-auto md:flex-shrink-0 md:text-left lg:mx-0">
                                A clean and simple interface to organize your favourite websites. open a new browser tab and see your sites load instantly. Try it for free.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md-5 shadow">
                                    <a href="/" class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-3">
                                        Get it on Chrome
                                    </a>
                                </div>
                                <div className="mt-2 sm:mt-0 sm:ml-2">
                                    <a href="/" class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-3">
                                        Get it on Firefox
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative ">
                           
                            <img src={illustration} alt="illustration" 
                            className="rounded mb-2- shadow h-56 w-full relative top-10 right-9 z-10 object-cover sm:h-72 md:h-96 sm:w-full md:h-full px-3 py-1 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-black focus:bg-indigo-700 md:  py-4 md:text-lg md:px-3 py-1"/>

                                <div className="absolute -bottom-40 left-16 z-0 w-full bg-blue-600 rounded-l-full h-full"></div>
                        
                        </div>
                    </main>
                </section>
                
            </div>
               
            </div>
        </nav>
                
    );
};
                                                
                                                                                                       

export default Topbar
