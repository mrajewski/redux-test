import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./seasonDisplay";


class App extends Component {
    state = {
        lat: null,
        errMsg: ''
    };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMsg: err.message})
        );
    }

    render() {
        if (this.state.errMsg && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errMsg}
                </div>
            )
        }
        if (!this.state.errMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <div>Loading!</div>
    }

}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
