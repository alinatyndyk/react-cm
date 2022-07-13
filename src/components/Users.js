import {useEffect, useState} from "react";
import User from "./User";
import UserDetails from "./UserDetails";

export default function Users(){

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])

    const userButton = (item) =>{
        setUser(item);
    }


    return(

        <div>
            {
                user && <UserDetails user={user}/>
            }

            {
                users.map(user => <User item={user}
                                         key={user.id}
                                         userButton={userButton}/>)
            }
        </div>
    )
}