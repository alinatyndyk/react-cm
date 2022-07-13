import {Link} from "react-router-dom";

export default function CommentComponent({item}){
    return(
        <div>
            <h3>{item.id} - {item.name}</h3>
            <p>{item.body}</p>
            <span><Link to={item.postId.toString()}>Post for comment</Link></span>
        </div>
    )
}