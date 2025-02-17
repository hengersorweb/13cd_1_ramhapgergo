import React from "react";
import { Link, NavLink} from "react-router-dom"
const Navbar = (()=>{

    return(
        <div>
             <nav className=" gray no-underline underline-hover">
                <Link className="pa3 pa4-ns gray no-underline underline-hover " to = '/'>Főoldal</Link>
                <NavLink className="pa3 pa4-ns gray no-underline underline-hover" to = '/ermesek'>Az olimpia érmesei</NavLink>
                <NavLink className="pa3 pa4-ns gray no-underline underline-hover" to = '/mermesek'>A magyar  olimpia érmesei</NavLink>
             </nav>
        </div>
    )

}
)
export default Navbar