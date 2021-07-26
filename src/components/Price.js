import React from 'react';
import Chrome from "../Images/logo-chrome.svg";
import Firefox from "../Images/logo-firefox.svg";
import Opera from "../Images/logo-opera.svg";


export default function Price() {
    return (
        <div>
            <div className="py-20 mt-20">
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h2 className="text-3xl text-center text-bookmark-blue">Download the extension</h2>
                        <p className="text-center font-medium text-gray-400 mt-4">
                            We've got more browsers in the pipeline. Please do let us know if you got a favourite you'd like us to prioritize.                    can access them on the go.
                        </p>
                        </div>
                    
                    <main className="container my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-30 gap-8 max-w-screen-lg mt-16">
                        <div className="flex flex-col h-80 rounded-md shadow-md lg:mb-16">
                            <div className="p-6 flex flex-col items-center">
                                <img src={Chrome} alt="Chrome" className=""/>
                    <h2 className="mt-5 b-2 text-black font-extrabold text-lg">Add to Chrome</h2>
                    <div className=" my-2 flex-1 divide-y-4 divide-black divide-dotted divide-opacity-20">
                    <p className="mb-2 pl-8 text-gray-400 font-light">
                        Minimum version 62
                    </p>
                    <hr className="border-b border-white"/>
                    <div className="flex p-6">
                    <button type="button" className=" flex items-center justify-center btn btn-indigo hover:bg-indigo-700 md:py-3 md:text-md md:px-1 hover:text-black">Add & Install Extension</button>
                        
                    </div> 
                    </div>
                    </div>
                </div>
                
                <div className="flex flex-col h-80 rounded-md shadow-md lg:my-8">
                            <div className="p-6 flex flex-col items-center">
                                <img src={Firefox} alt="Firefox" className=""/>
                    <h2 className="mt-5 b-2 text-black font-extrabold text-lg">Add to Chrome</h2>
                    <div className=" my-2 flex-1 divide-y-4 divide-black divide-dotted divide-opacity-20">
                    <p className="mb-2 pl-8 text-gray-400 font-light">
                        Minimum version 62
                    </p>
                    <hr className="border-b border-white"/>
                    <div className="flex p-6">
                    <button type="button" className=" flex items-center justify-center btn btn-indigo hover:bg-indigo-700 md:py-3 md:text-md md:px-1 hover:text-black">Add & Install Extension</button>
                        
                    </div> 
                    </div>
                    </div>
                </div>

                <div className="flex flex-col h-80 rounded-md shadow-md lg:mt-16">
                            <div className="p-6 flex flex-col items-center">
                                <img src={Opera} alt="Opera" className=""/>
                    <h2 className="mt-5 b-2 text-black font-extrabold text-lg">Add to Chrome</h2>
                    <div className=" my-2 flex-1 divide-y-4 divide-black divide-dotted divide-opacity-20">
                    <p className="mb-2 pl-8 text-gray-400 font-light">
                        Minimum version 62
                    </p>
                    <hr className="border-b border-white"/>
                    <div className="flex p-6">
                    <button type="button" className=" flex items-center justify-center btn btn-indigo hover:bg-indigo-700 md:py-3 md:text-md md:px-1 hover:text-black">Add & Install Extension</button>
                        
                    </div> 
                    </div>
                    </div>
                </div>
                </main>
                </div>

            </div>
            
        
        )
    }

