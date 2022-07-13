import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getPostCurrentComment} from "../../servises/services";
import PostsComponent from "./PostsComponent";

export default function PostsCurrentComment({item}){

    const {postId} =useParams()

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        getPostCurrentComment(postId).then(value => setPosts([{...value}]))
    },[postId])

    return(
        <div>

            {
                posts.map(value => <PostsComponent item={value} key={value.id}/>)
            }
        </div>
    )
}