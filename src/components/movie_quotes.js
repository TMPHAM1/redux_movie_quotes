import React, {Component} from 'react';
import auth from '../hoc/auth';

class MovieQuotes extends Component {
    render() {
        console.log('Movie Props:', this.props);
        return (
            <div> 
                <h1 className="center"> Believe It </h1>
                <p className="center"> Be better then the you of yesterday</p>
            </div>
        )
    }
}
export default auth(MovieQuotes);