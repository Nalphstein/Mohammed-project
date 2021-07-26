import React from 'react';
import lucious from "../Images/features-3.svg";


export default function Intro() {
    return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Features</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <div>
            <div className="my-20">
              <div className="hidden md:flex md:ml-20 md:pr-36 md:space-x-40 relative justify-center items-center border-b-2 hover:rounded-sm">
                <h2 className="mt-3 text-3xl leading-6 font-medium tracking-tight text-gray-500 sm:text-2xl hover: border-b-2 hover: pb-6 hover:border-red-500">Simple Bookmarking</h2>
                <h2 className="mt-3 text-3xl leading-6 font-medium tracking-tight text-gray-500 sm:text-2xl hover: border-b-2 hover: pb-6 hover:border-red-500">Speedy Searching</h2>
                <h2 className="mt-3 text-3xl leading-6 font-medium tracking-tight text-gray-500 sm:text-2xl hover: border-b-2 hover: pb-6 hover:border-red-500">Easy Sharing</h2>   
              </div>
            </div>
          </div>
        </div>
        
        <main className="grid lg:grid-cols-2 my-30 gap-60">
        <div className="relative ">
          <img src={lucious} alt="lucious" 
          className="rounded mt-15 shadow h-56 w-full relative top-10 left-20 z-10 object-cover sm:h-72 md:h-96 sm:w-full md:h-full"/>
          <div className="absolute -bottom-40 right-20 z-0 w-full bg-blue-600 rounded-r-full h-full">

          </div>
                       
        </div>
        <div className="lg:text-left lg:text-left">
          <h1 className=" mt-20 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-100xl sm:text-100xl">
            <span className="block xl:inline md:flex-shrink-5">
              Bookmark in one click
            </span>
          </h1>
          <p className="mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-100xl sm:mx-auto md:flex-shrink-0 md:text-left lg:mx-0">
            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control  over how you manage your favourite sitesour favourite websites.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md-5 shadow">
              <button type="button" className="w-full flex items-center justify-center btn btn-indigo hover:bg-indigo-700 md:py-4 md:text-lg md:px-3">
                More Info
              </button>
            </div>
          </div>
        </div>
        </main>
      </div>
        </div>
        
    )
}
