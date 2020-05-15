import React, { Component, useState } from "react";

class App extends Component {
 
    constructor(props) {
        super(props);
    }   

    render () {
        return (
            <h1> My favourite color in this react typescript app is {this.props.color} </h1>
        );
    }
}

export default App;