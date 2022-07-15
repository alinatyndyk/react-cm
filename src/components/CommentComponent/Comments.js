import {Component} from "react";

import Comment from "./Comment";
import CommentApiService from "../services/comment.api.service";

class Comments extends Component{
    state = {comments: []};
    // userApiService = new PostApiService()
    constructor(props) {
        super(props);
        this.UserApiService = new CommentApiService();
        this.UserApiService.getComments().then(value => this.setState({comments:value}))

    }

    render() {
        return(
            <div>
                {
                    this.state.comments.map(value => <Comment item={value} key={value.id}/>)
                }
            </div>
        )
    }
}
export default Comments