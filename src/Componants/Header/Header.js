import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="logo"><h1>Logo</h1></div>
                <div className="menu">
                  
                         
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/sipmant'>revew</NavLink>
                            <NavLink to='/newshop'>shop2</NavLink>
                             
                      
                    
                </div>
                <div className="buton"><button><Link to="/login">sign up</Link></button></div>
            </nav>




            














        </div>
    );
};

export default Header;