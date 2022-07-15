
import './App.css';
import {Component} from "react";
import Posts from "./components/PostComponent/Posts";
import Comments from "./components/CommentComponent/Comments";

class App extends Component{

  render() {
    return(
        <div>
            <h2>Posts</h2>
          <Posts/>
            <hr/>
            <Comments/>
        </div>
    )
  }
}

export default App;
