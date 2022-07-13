import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div>
            <h2>Menu</h2>
            <div><Link to={'todos'}>Todos</Link></div>
            <div><Link to={'albums'}>Albums</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
        </div>
    )
}