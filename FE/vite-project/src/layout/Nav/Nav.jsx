import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

function Nav() {
  return (
    <>
   <header>
   <div className="nav">
        <div className="nav_text">
            <p>Pulse</p>
           <div className="noqte"></div>
        </div>
        <div className="nav_list">
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/admin"}>Admin</Link>
                <Link to={"/add"}>Add</Link>
            </ul>
        </div>
        <div className="nav_icon"><i className="fa-solid fa-bars"></i></div>
        <div className="nav_contact">
            <p>Reservations</p>
            <i className="fa-solid fa-phone"></i>
            <span>994 51 578 13 13             </span>
        </div>
    </div>
   </header>
    </>
  )
}

export default Nav
