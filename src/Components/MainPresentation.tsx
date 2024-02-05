import EaseInLogoBig from "./EaseInLogoBig";

const dotenv = require("dotenv");
dotenv.config();

export default function MainPresentation() {
    return(
        <div className={"bg-no-repeat bg-cover bg-center h-screen bg-center flex flex-col text-white justify-center items-center"} style={{backgroundImage: "url(" + process.env.HOST + "/presentation.jpg)"}}>

            <div className="my-10 md:ml-10 shadow rounded-sm">
                <EaseInLogoBig/>
            </div>
            
                
        </div>
    )
}