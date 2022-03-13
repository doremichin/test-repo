import {Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Test from "./page/Test";
import Live from "./page/Live";

const Routers = () => {
    return(
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route path={'/test'} element={<Test/>}/>
            </Route>
            <Route path={'/live'} element={<Live/>}/>
        </Routes>
    )
};


export default Routers;
