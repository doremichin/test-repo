import {Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Test from "./page/Test";

const Routers = () => {
    return(
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route path={'test'} element={<Test/>}/>
            </Route>
        </Routes>
    )
};


export default Routers;