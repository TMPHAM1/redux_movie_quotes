import React, {Component} from 'react';

class SignUp extends Component {
    render() {
        console.log("signup props", this.props)
        return(
            <div>
                <h1 className="center">Sign Up</h1>
            </div>
        )
    }
}

export default SignUp;