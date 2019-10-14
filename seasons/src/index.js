import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./seasonDisplay";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            lat: null,
            errMsg: ''
        };
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude});
            },
            err => {
                this.setState({errMsg:err.message});
            }
        );
    }

    render() {
        if (this.state.errMsg && !this.state.lat){
            return (
                <div>
                    Error: {this.state.errMsg}
                </div>
            )
        }
        if (!this.state.errMsg && this.state.lat){
            return (
                <div>
                    Latitude: {this.state.lat}
                </div>
            )
        }
       return <div>Loading!</div>
    }

}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);