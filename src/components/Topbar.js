import React from 'react';
import lookmark from "../Images/logo-bookmark.svg"
import illustration from "../Images/illustration-features-tab-1.svg";



const Topbar = () => {
    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1"></div>
            <a href="/">
                <span className="pl-8 mg-0 font-black">
                </span>
                <img src={lookmark} alt="" className="h-full rounded mb-2- shadow"/>
            </a>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="hidden md:flex md:ml-20 md:pr-4 md:space-x-3 relative justify-end">
                <a href="/" class="font-medium text-gray-500 hover:text-gray-900 md:flex place-items-start  justify-end md:flex-4 lg:w-0">Features</a>
                <a href="/" class="font-medium text-gray-500 hover:text-gray-900 md:flex items-center justify-end md:flex-4 lg:w-0">Pricing</a>
                <a href="/" class="font-medium text-gray-500 hover:text-gray-900 md:flex items-center justify-end md:flex-4 lg:w-0">Contact</a>
                <a href="/" class="font-medium text-indigo-600 hover:text-indigo-500 md:flex items-center justify-end md:flex-4 lg:w-0">Log in</a>
                </div>
                </div>
                
            </div>
            <div classname="grid md:grid-flow-col">
                <main className="mt-5 mx-auto max-w-5xl px-4 sm:mt-8 sm:px-6 md:mt-14 lg:mt-12 lg:px-8 xl:mt-28">
                    <div className="sm:text-left lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-100xl md:text-600xl">
                            <span className="block xl:inline">A Simple Bookmark Manager</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-100xl sm:mx-auto md:flex-shrink-0 md:text-left lg:mx-0">
                                A clean and simple interface to organize your favourite websites. open a new browser tab and see your sites load instantly. Try it for free.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                        Get it on Chrome
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                        Get it on Firefox
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-90 lg:w-1/2">
                        <img src={illustration} alt="" className="h-56 w-right object-cover sm:h-72 md:h-96 lg:w-right lg:h-left"/>
                </div>
                </main>
                </div>
               
            </div>
            </nav>
                
    );
};
                                                
                                                                                                       

export default Topbar
