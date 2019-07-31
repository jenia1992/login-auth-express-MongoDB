import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >Logo</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item nav-link" ><Link to={"/landingpage"}>Home</Link></li>
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item nav-link" ><Link to={"/"}>Login</Link></li>
                    <li className="nav-item nav-link" ><Link to={"/signup"}>SignUp</Link></li>
                </ul>
                
            </div>
        </nav>

    )
}
export default Header;