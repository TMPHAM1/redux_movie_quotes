import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
             <nav  className="black">
                 <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Naruto Quotes</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/secret-list">Secret List</Link>
                        </li>
                        <li>
                            <Link to="/movie-quote"> Naruto Quote</Link>
                        </li>
                        <li>
                            <button className="btn green darken-3"> Sign Up </button>
                        </li>
                    </ul>
                 </div>
             </nav>
        )
    }
}

export default Nav;