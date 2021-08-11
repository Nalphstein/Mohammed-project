import React from 'react';
import lookmark from "../../../Images/logo-Copy.svg";
import facebook from "../../../Images/icon-facebook.svg";
import twitter from "../../../Images/icon-twitter.svg";

export default function Bottombar() {
    return (
        <div>
            <footer className="bg-black py-8">
                <div className="container flex flex-col md:flex-row items-center">
                    <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                        <img src={lookmark} alt="lookmark" className="text-white h-full rounded mb-2- shadow"/>
                        <ul className="flex text-white uppercase gap-12 text-xs">
                        <a href="/" className="font-medium text-white hover:text-red-600  py-2 xl:flex place-items-start md:flex-4 cursor-pointer">Features</a>
                            <a href="/" className="font-medium text-white hover:text-red-600  py-2 xl:flex items-center md:flex-2 cursor-pointer">Pricing</a>
                            <a href="/" className="font-medium text-white hover:text-red-600  py-2 xl:flex items-center md:flex-4 cursor-pointer">Contact</a>
                        </ul>
                    </div>
                    <div className="flex gap-10 mt-12 md:mt-0 hover:text-red-600 cursor-pointer">
                        <img src={facebook} alt="Facebook" className=""/>
                        <img src={twitter} alt="Twitter" className=""/>
                    </div>
                </div>
            </footer>
        </div>
    )
}