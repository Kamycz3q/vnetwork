import Link from "next/link";


export default function Footer() {
    return (
        <div className="bg-black">
            <div className="flex flex-col justify-center md:flex-row p-10">
                <div className="md:basis-1/6">
                    <img src="./HexaVerseTransparent.png"/>
                </div>
                <div className="flex flex-col md:basis-4/6 mb-5 max-sm:text-center">
                    <div className=" flex flex-row items-center bg-clip-text text-transparent text-center bg-gradient-to-t from-blue-700 to-blue-900 justify-left font-quantum"> 
                        <img className="h-14 w-auto justify-self-center" src="./HexaVerseTransparent.png" alt="HexaVerse"/>
                        <div className="flex items-end text-3xl pt-2 text-blue-600">Network</div>
                    </div>
                    <Link href="" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 hover:text-white rounded-md px-3 py-2 md:w-1/6"><i className="bi bi-house-door"></i> HOME</Link>
                    <Link href="./#concept" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 hover:text-white rounded-md px-3 py-2 md:w-1/6"><i className="bi bi-book"></i> ABOUT US</Link>
                    <Link href="./#gameservers" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 hover:text-white rounded-md px-3 py-2 md:w-1/6"><i  className="bi bi-hdd-stack "></i> GAME SERVERS</Link>
                           
                </div>
                <div className="md:basis-1/6 flex flex-col justify-start text-light font-norwester text-white max-sm:text-center">
                    <div>
                        <h1 className="text-3xl">Contact</h1>
                        <p className="text-xl">Discord: Kamycz3q#4601</p>
                    </div>
                    
                </div>
            </div>
            <div className="pb-10 text-white text-center max-sm:p-5">
                <p className="text-md font-mono">Copyright  Kamycz3q#4601&copy;2023 All Rights Reserved. Site created Kamycz3q#4601 for VNetwork. Site is not associated with FacePunch & Pocketpair.</p>
            </div>
        </div>
        
    )
}