"use client"

import { motion } from "framer-motion"

export default function Admins() {
    const admins = [
        {
            "key": "kamol",
            "name": "Kamycz3q#4601",
            "description": "VNetwork Owner<br>Web developer<br>Social Media Manager<br> PalWorld Co-Owner & Developer <br> Rust Co-Owner & Developer",
            "img": "https://cdn.discordapp.com/avatars/572545637456019506/aaa31f806dc1025b5a0e8710f8ce9ec0.png?size=100"
        },
        {
            "key": "kondzio",
            "name": "Kondzio#4601",
            "description": "Rust Co-Owner & Developer",
            "img": "https://cdn.discordapp.com/avatars/319816907337498627/4e4ac04cc1490e25377ce0c80785a3bf.png?size=100"

        },
        {
            "key": "kajtas",
            "name": "Kajtas#4601",
            "description": "PalWorld Co-Owner",
            "img": "https://cdn.discordapp.com/avatars/656488474760839220/b5f3f79d3093dac062c1cc9616381f5a.png?size=100"

        },
        
    ]

    return(
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            id="concept"
            >
            <h1 className="mt-14 text-6xl font-norwester text-center text-cyan-100">Our Team</h1>
            <div className="md:p-10 p-5 md:grid md:grid-flow-row md:grid-cols-3">
                {admins.map((e,i) => 
                    <div className="flex gap-5 bg-gradient-to-r from-cyan-900 to-gray-900 text-white font-norwester p-3 m-5 items-center border-4 border-cyan-900 rounded-lg">
                        <div>
                            <img src={e.img} className="rounded-full"/>
                        </div>
                        <div className="transition-all ">
                            <h1 className="text-3xl hover:text-4xl transition-all font-mono font-bold">{e.name}</h1>
                            <div className="text-xl pl-1 transition-all font-mono" dangerouslySetInnerHTML={{__html: e.description}}></div>
                        </div>
                    </div>    
                    
                )}
            </div>
        </motion.div>
        
    )
}