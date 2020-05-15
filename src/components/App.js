import React, { Component, useState } from "react";
import "../css/styles.css";
import WhiteKey from "./whitekeys";
import BlackKey from "./blackkeys";

class App extends Component {
 
    constructor(props) {
        super(props);
    }   

    renderOctaves = (octave) => {
        let renderedComponents = []
        octave.map(item => {
            if(item === "e" || item === "b"){
            renderedComponents.push( 
                    <WhiteKey letter={item} />
               )
            } else {
                renderedComponents.push( <>
                    <WhiteKey letter={item} />
                    <BlackKey />
                </>) 
            }
        });
        return renderedComponents;
    };

    render () {
        const octave = ['c','d','e','f','g','a','b'];
        return (<>
            <div className="container">
                <div className="header">
                    <h1>Piano</h1>
                </div>
                <div className="keyboard">
                    {this.renderOctaves(octave)}
                </div>
            </div>
            </>
        );
    }
}

export default App;