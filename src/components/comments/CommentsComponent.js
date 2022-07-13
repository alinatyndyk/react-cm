import {useEffect, useState} from "react";
import {getComments} from "../../servises/services";
import CommentComponent from "./CommentComponent";

export default function CommentsComponent(){

    let [comments, setComments] = useState([]);

    useEffect(()=>{
        getComments().then(value => setComments([...value]))
    })

    return(
        <div>
            {
                comments.map(value => <CommentComponent item={value} key={value.id}/>)
            }
            
        </div>
    )
}