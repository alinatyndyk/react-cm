import {Component} from "react";
import PostApiService from "../services/post.api.service";
import Post from "./Post";

class Posts extends Component{
    state = {posts: []};
    // userApiService = new PostApiService()
    constructor(props) {
        super(props);
        this.UserApiService = new PostApiService();
        this.UserApiService.getPosts().then(value => this.setState({posts:value}))

    }

    render() {
        return(
            <div>
                {
                    this.state.posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        )
    }
}
export default Posts