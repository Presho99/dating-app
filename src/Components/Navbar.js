
import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom"


function Navbar(){
    return(
        <div className='navbar' style={{backgroundImage: "url('login.jpeg')"}}>
            <nav >

                <NavLink to="/signup" style={{textDecoration: "none"}}><h1>Signup</h1></NavLink>
                <NavLink to="/signin" style={{textDecoration: "none"}}><h1>Login</h1></NavLink>
            </nav>
            

    
        </div>
    )
}

export default Navbar