
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Status(props: any) {
    
    const [serverStatus, setServerStatus] = useState(false);

    function updateServerStatus() {
        const statusEndpoint = `https://api.mcsrvstat.us/2/${props.serverAddress}`;
        try {

          const response = axios.get(statusEndpoint).then(response => {
            if (response.status === 200) {
                const serverStatus = response.data;
                console.log(response.data)
                setServerStatus(serverStatus.online);
            }
          })
        } catch (error) {
        }
    }
    useEffect(() => {
        updateServerStatus();
    }, [])
    return(
        <div className={"font-sans font-bold " + props.className + " " + (serverStatus ? "text-green-500" : "text-red-900")}> <span className={serverStatus ? "text-green-500" : "text-red-900"}> • </span>{serverStatus ? "Online" : "Offline"}</div>
    )
}