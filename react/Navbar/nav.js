

import Home from "../Home/Home";
import "./nav.css";
import { Link } from "react-router-dom";
function Navbar()
{
    return(
        <>
           <nav>
            <Link to="/Home"><a>Home</a></Link>
            <Link to="/Abput"><a>About</a></Link>
            <Link to="/Contact"><a>Contact</a></Link>
            
           </nav> 
        </>
    );
}
export default Navbar;