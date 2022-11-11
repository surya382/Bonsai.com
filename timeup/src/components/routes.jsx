import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Price from "../pages/price"
import Review from "../pages/Review"
import Login from "../pages/login"
import Signup from "../pages/Signup"

function Allroute(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/price" element={<Price/>}/>
            <Route path="/review" element={<Review/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
       
    )
}

export default Allroute;