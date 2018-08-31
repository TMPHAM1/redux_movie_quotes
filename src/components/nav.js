import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { signIn, signOut} from '../actions';

class Nav extends Component {
    renderAuthButtons() {
        const { auth, signIn, signOut} = this.props;
         if (auth) {
             return <button onClick={signOut} className="btn red darken-3"> Sign Out</button>
         }
         else {
            return <button onClick={signIn} className="btn green darken-3"> Sign In</button>
         } 

    }


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
                        <Link to="/sign-up"> Sign Up</Link>
                        </li>
                        <li>
                            {this.renderAuthButtons()}
                        </li>
                    </ul>
                 </div>
             </nav>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {signIn: signIn, signOut: signOut})(Nav);