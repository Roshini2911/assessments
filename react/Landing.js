import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import {BrowseRouter,Routes, Route} from "react-router-dom";

function Landing(){
    return(
        <>
        <BrowseRouter>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>

        </Routes>
        </BrowseRouter>
        </>
    );
}
export default Landing;