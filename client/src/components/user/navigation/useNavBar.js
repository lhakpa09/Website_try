import React from "react";
import { useNavigate } from "react-router-dom";
import './userNavbar.css';

function UserNavBar() {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="logo" onClick={() => navigate("/")}>
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="nav-links">
                <p onClick={() => navigate("/")}>Home</p>
                <p onClick={() => navigate("/about-us")}>About</p>
                <p onClick={() => navigate("/service")}>service</p>
                <button className="quote-button" onClick={() => navigate("/get-quote")}>
                    REQUEST QUOTE
                </button>
            </div>
            {/* {<div class="buttons">
           <div> <p onClick={()=>navigate("/admin-login")}>Login</p></div>
           </div>} */}
        </div>
    );
}

export default UserNavBar;
