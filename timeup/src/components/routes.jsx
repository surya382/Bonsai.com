import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Price from "../pages/price"
import Review from "../pages/Review"

function Allroute(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/price" element={<Price/>}/>
            <Route path="/review" element={<Review/>}/>
        </Routes>
       
    )
}

export default Allroute;