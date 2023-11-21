import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return(
        <>
        <nav>
            <h1>Wholesome Cravings</h1>
            <h4>
                <Link to={'/'}><h5 className="home">Home</h5> </Link>
            <Link to={'about/'}>About</Link>
            <Link to={'Contact/'}>Contact</Link>
            </h4>
        </nav>
        </>
    )
}



export default Navbar;