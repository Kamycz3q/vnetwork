"use client"
import { motion } from "framer-motion"

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    let [menuMobileHidden, setMenuMobileHidden] = useState(true);
    const [mobileMenuY, setMobileMenuY] = useState(0);
    let mobileMenuStandardHeight= 250;


    

    const toggleMobileMenu = () => {
        setMenuMobileHidden(!menuMobileHidden);
    }
    return(
        <nav className="bg-gray-800/40 p-3 fixed w-screen hover:bg-gray-800/80 transition-all font-bold">
            <div className="max-sm:hidden flex">
                <div className="pl-5 flex flex-row items-center bg-clip-text text-transparent text-center bg-gradient-to-t from-blue-700 to-blue-900 justify-center font-quantum"> 
                    <img className="h-14 w-auto justify-self-center" src="./HexaVerseTransparent.png" alt="HexaVerse"/>
                    <div className="flex items-end text-3xl pt-2 text-blue-600">Network</div>
                </div>
                <div className="flex flex-1 items-center justify-end justify-self-end pr-5">
                    <div className="flex flex-shrink-0 items-center justify-start">
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="space-x-4 font-medium text-md ">
                            <Link href="" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 hover:text-white rounded-md px-3 py-2"><i className="bi bi-house-door"></i> HOME</Link>
                            <Link href="./#concept" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 hover:text-white rounded-md px-3 py-2"><i className="bi bi-book"></i> ABOUT US</Link>
                            <Link href="./#gameservers" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 hover:text-white rounded-md px-3 py-2"><i  className="bi bi-hdd-stack "></i> GAME SERVERS</Link>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* mobilne */}
            <div className="sm:hidden truncate " >
                <div className="flex justify-between items-center">
                    <img className="h-14 w-auto justify-self-center" src="./HexaVerseTransparent.png" alt="HexaVerse"/>
                    <i onClick={toggleMobileMenu} className="text-2xl text-white bi bi-list cursor-pointer"></i>
                </div>
                
                <motion.div
                initial={{maxHeight: 0}}
                animate={{ maxHeight: menuMobileHidden ? 0 : mobileMenuStandardHeight }}
                transition={{duration: 0.5}}
                className={"sm:hidden "} id="mobile-menu">
                    <div className="grid space-y-1 px-2 pb-3 pt-2 text-center">
                        <a href="#" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 hover:text-white block rounded-md px-3 py-2"><i className="bi bi-house-door"></i> HOME</a>
                        <a href="./#concept" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 hover:text-white block rounded-md px-3 py-2"><i className="bi bi-book"></i> ABOUT US</a>
                        <a href="./#gameservers" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 hover:text-white rounded-md px-3 py-2"><i className="bi bi-hdd-stack"></i> SERVERS</a>
                    </div>
                </motion.div >
            </div>
        </nav>

    )
}