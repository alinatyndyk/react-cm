import Header from "../components/header/Header";
import {BrowserRouter as Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <div>
            <Header/>
            <h2>Content</h2>
            <Outlet/>

        </div>
    )
}
export {MainLayout}