import React, {Component} from 'react';

class Post extends Component {

    render() {
        return (
            <div>
                <h3> {this.props.item.id} - {this.props.item.title}</h3>
                <p>{this.props.item.body}</p>
            </div>
        );
    }
}

export default Post;