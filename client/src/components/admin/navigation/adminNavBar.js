import React from "react";
import { useNavigate } from "react-router-dom";
import './adminNavbar.css';
import { useDispatch } from 'react-redux'
import {resetLoginDetails } from '../../../redux/reducers/userSlice'


function AdminNavBar(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return(
        <div className="navbar">
            <div className="logo" onClick={() => navigate("/")}>
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="nav-links">
                <p onClick={() => navigate("/")}>Home</p>
                <p onClick={() => navigate("/about-us")}>About</p>
                <p onClick={() => navigate("/service")}>service</p>
                {<div class="buttons">
                    <div> <p onClick={()=>dispatch(resetLoginDetails())}>Logout</p></div>
                </div>}
            </div>
        </div>
    )
}
export default AdminNavBar