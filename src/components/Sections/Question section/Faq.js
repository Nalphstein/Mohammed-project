import React from 'react';
import Arrow from "../../../Images/icon-arrow.svg";


export default function Faq() {
    return (
        <div>
            <div className="bg-bookmark-white py-20">
                <div className="container mx-auto mb-20">
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                        <h2 className="mt-2 text-3xl text-center text-bookmark-Black">Download the extension</h2>
                        <p className="text-center text-bookmark-grey mt-4">
                            We've got more browsers in the pipeline. Please do let us know if you got a favourite you'd like us to prioritize.                    can access them on the go.
                        </p>

                </div>

                <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                    <div className="flex items-center justify-center border-b py-4">
                        <span className="flex-1">What is a Bookmark?</span>
                        <img src={Arrow} alt="Arrow" className=""/>
                    </div>
                </div>

                <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                    <div className="flex items-center justify-center border-b py-4">
                        <span className="flex-1">How can I request a new browser?</span>
                        <img src={Arrow} alt="Arrow" className=""/>
                    </div>
                </div>

                <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                    <div className="flex items-center justify-center border-b py-4">
                        <span className="flex-1">Is there a mobile app?</span>
                        <img src={Arrow} alt="Arrow" className=""/>
                    </div>
                </div>

                <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                    <div className="flex items-center justify-center border-b py-4">
                        <span className="flex-1">What about other Chromium browsers?</span>
                        <img src={Arrow} alt="Arrow" className=""/>
                    </div>

                    <button type="button" className="mt-12 flex self-center border: border-opacity-10 bg-indigo-600 text-white hover:text-black py-1 px-2 rounded-md cursor-pointer">More Info</button>
                </div>

                
                </div>
            </div>
            
        </div>
    )
}
