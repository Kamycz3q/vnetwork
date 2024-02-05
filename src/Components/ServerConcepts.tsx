"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import Rust from "./gameservers/Rust";
import PalWorld from "./gameservers/PalWorld";


export default function JoinNow() {
    return(
        <div className="md:p-10">
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            id="concept"
            className="">
                    <div className="mt-5 ml-5 mr-5 md:p-10 p-5 bg-gradient-to-r from-zinc-900 to-gray-900 border-4 border-cyan-900 text-blue-100">
                        <h1 className="text-center text-5xl mb-10 font-norwester">Why you should play on our servers</h1>
                        <div className="md:grid md:gap-5 text-blue-200 md:grid-cols-3 flex flex-col gap-3 text-white">
                            <div className="flex flex-col md:flex-row border-4 border-cyan-900 p-5">
                                <div className="flex items-center justify-center md:basis-3/6 max-sm:p-5">
                                    <div className="text-center">
                                        <i  className="bi bi-hdd-stack md:text-8xl text-6xl text-center"></i>
                                    </div>
                                </div>
                                <div className="md:flex md:flex-col md:basis-1/2  justify-center">
                                    <div className="md:flex md:flex-row md:justify-between flex flex-col justify-center items-center"><h1 className="text-2xl font-norwester italic text-left">No Lags? No problem!</h1> </div>
                                    <p className="md:text-xl font-norwester md:text-left text-center">Our servers are hosted with powerful machines and we always have some resources in emergency to prevent lags!</p>
                                
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row border-4 border-cyan-900 p-5">
                                <div className="flex items-center justify-center md:basis-3/6 max-sm:p-5">
                                    <div className="text-center">
                                        <i  className="bi bi-reception-4 md:text-8xl text-6xl text-center"></i>
                                    </div>
                                </div>
                                <div className="md:flex md:flex-col md:basis-1/2  justify-center">
                                    <div className="md:flex md:flex-row md:justify-between flex flex-col justify-center items-center"><h1 className="text-2xl font-norwester italic text-left">Growing network</h1> </div>
                                    <p className="md:text-xl font-norwester md:text-left text-center">As long as we have budget we will create next servers! Also on our servers everyone could give ideas and change our servers to better versions!</p>
                                
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row border-4 border-cyan-900 p-5">
                                <div className="flex items-center justify-center md:basis-3/6 max-sm:p-5">
                                    <div className="text-center">
                                        <i  className="bi bi-code-slash md:text-8xl text-6xl text-center"></i>
                                    </div>
                                </div>
                                <div className="md:flex md:flex-col md:basis-1/2  justify-center">
                                    <div className="md:flex md:flex-row md:justify-between flex flex-col justify-center items-center"><h1 className="text-2xl font-norwester italic text-left">Dev Team</h1> </div>
                                    <p className="md:text-xl font-norwester md:text-left text-center">Our team is fast learning and passionate so you will not be dissapointed here!</p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    
                <div>
                    
                </div>            
                <div className="Gameservers" id="gameservers">
                    <Rust></Rust>
                    <PalWorld></PalWorld>
                </div>
            </motion.div>
        </div>
    )
}