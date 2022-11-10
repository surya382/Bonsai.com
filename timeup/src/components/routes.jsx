import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Price from "../pages/price"
import Review from "../pages/Review"
import Login from "../pages/login"

function Allroute(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/price" element={<Price/>}/>
            <Route path="/review" element={<Review/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
       
    )
}

export default Allroute;