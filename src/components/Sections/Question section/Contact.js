import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="bg-indigo-700 text-white py-20">
                <div className="container">
                    <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                        <p className="font-light uppercase text-center mb-8">35,000+ ALREADY JOINED</p>
                        <h1 className="text-3xl text-center">Stay up-to-date with what we're doing</h1>
                        <div className="flex flex-col sm:flex-row gap-6 mt-8">
                            <input type="text" placeholder="Enter your email address" className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"/>
                            <button type="button" className="flex items-center justify-center border border-transparent btn bg-red-600 hover:bg-white hover:text-black">
                                        Contact Us
                                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
