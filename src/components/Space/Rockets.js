import {useEffect, useState} from "react";
import Rocket from "./Rocket";

export default function Rockets(){

    const [rocket, setRocket] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setRocket(value.filter(value => value.launch_year !== '2020')))
    },[])

    return(
        <div>
            {
                rocket.map((rocket,index) => <Rocket key={index} item={rocket}/>)
            }

        </div>
    )
}