import {Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Test from "./page/Test";
import Live from "./page/Live";
import Form from "./page/Form";

const Routers = () => {
    return(
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route path={'/test'} element={<Test/>}/>
            </Route>
            <Route path={'/live'} element={<Live/>}/>
            <Route path={'/form'} element={<Form/>}/>
        </Routes>
    )
};


export default Routers;
