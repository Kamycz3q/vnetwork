"use client"
import { easeInOut, motion } from "framer-motion";

export default function EaseInLogoBig() {
    return(
        <motion.div animate={{scale: 1.0}}    transition={{ duration: 0.5, ease: "easeInOut"}} initial={{scale: 0}} className="p-10 size-full flex flex-col justify-center">
            <img src={process.env.HOST + "/HexaVerseTransparent.png"} alt="Logo serwera" width={450} className="" />
            <div className="bg-gray-900/[.9] p-6  rounded">
                <div className="text-5xl font-extrabold font-mono">
                    <div className="bg-clip-text text-transparent text-center bg-gradient-to-t from-blue-700 to-blue-900 font-quantum justify-center">
                        <span className="text-6xl text-blue-600">V</span>Network

                    </div>
                </div>
                <div className="text-5xl">
                    <div className=" bg-gradient-to-t from-blue-700 to-blue-900 justify-center h-2 m-3">
                    </div>
                </div>
                <div className="text-2xl font-mono">
                    <div className="bg-clip-text text-transparent text-center bg-gradient-to-t from-blue-500 to-blue-700 font-starkiller justify-center">
                        <span>Game servers</span>
                        <br/>
                        <span>Made by passionates</span>                    
                    </div>
                </div>
            </div>
            
        </motion.div>
    )
}