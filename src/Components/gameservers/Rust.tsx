import { motion } from "framer-motion";

export default function Rust() {
    return(

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="">
                    <div className="md:flex md:flex-row text-white mt-5 ml-5 mr-5 bg-gradient-to-r from-zinc-900 to-gray-900 border-4 border-cyan-900">
                        <div className="flex flex-row justify-center mt-14 mb-14 md:basis-3/6">
                            <div className="md:size-4/5 size-3/5">
                                <img src={"https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_6c6269c7c6164876585e0728742156b49af966af.1920x1080.jpg?t=1701938429"} alt="rust" className="w-auto rounded" />
                            </div>
                        </div>
                        <div className="md:flex md:flex-col  justify-center md:basis-6/6">
                            <p className="text-5xl mt-10 md:text-left font-quantum text-center">Rust Servers</p>
                            <p className="md:text-xl mt-14 font-norwester md:text-left text-center">No admin abuse, no lags, 99%+ Uptime, 24/7</p>
                            <a href="https://www.battlemetrics.com/servers/rust/25285720"><img className="mt-5" src="https://cdn.battlemetrics.com/b/horizontal500x80px/25285720.png?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700"/></a>

                            
                        </div>
                    </div>
                <div>
                    
            </div>
        </motion.div>
    )
}