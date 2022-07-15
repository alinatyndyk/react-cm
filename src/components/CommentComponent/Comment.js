import React, {Component} from 'react';

class Comment extends Component {

    render() {
        return (
            <div>
                <h3> {this.props.item.id} - {this.props.item.name}</h3>
                <p>{this.props.item.body}</p>
            </div>
        );
    }
}

export default Comment;