import React, { Component, useState } from "react";
import "../css/styles.css";
import WhiteKey from "./whitekeys";
import BlackKey from "./blackkeys";
import capitalise from "../utils/fomart"

class App extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            played : "",
            highlighted: "",
            input: ""
        };
    }   

    handleClicked = (value) => {
        console.log(value);
        this.setState({
            played : value,
            highlighted: value
        })
    };

    handleChange = (e) => {
        this.setState({ input: e.target.value });
     };

    handlePlay = () => {
        const notes = this.state.input;
        let playnotes = notes.split(",");
        let offset = 0;
        playnotes.map((item, i) => {
            setTimeout(() => {
                console.log(item); 
                this.setState({
                    highlighted: item
                });
              }, 1000 + offset);
            offset += 800;
        });
        
        console.log(this.state.input);
    };

    renderOctaves = (octave) => {
        let renderedComponents = []
        octave.map((item, i) => {
            const highlightClass = item === this.state.highlighted ? "highlighted" : "";
            if(item === "e" || item === "b"){
               renderedComponents.push( 
                    <WhiteKey key={i} letter={item} onClicked={this.handleClicked} highlight={highlightClass} />
               )
            } else {
                renderedComponents.push( <>
                    <WhiteKey key={i} letter={item} onClicked={this.handleClicked} highlight={highlightClass} />
                    <BlackKey key={Math.random()}  />
                </>) 
            }
        });
        return renderedComponents;
    };

    render () {
        const octave = ['c','d','e','f','g','a','b'];
        const capitalised = capitalise(this.state.played);
        return (<>
            <div className="container">
                <div className="header">
                    <h1>Piano</h1>
                </div>
                <div className="keyboard">
                    {this.renderOctaves(octave)}
                </div>
                <div className="results">
                    You played : {capitalised} 
                </div>
                <div className="results">
                    <div className="play-form">
                        <div className="my-form">
                            <div className="form-group">
                                <label>Enter notes to play (They should be delimited by a comma e.g. c,f,d,e)</label>
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                    name="name" 
                                    onChange={ this.handleChange }/>
                                <button className="button" type="submit" onClick={this.handlePlay}>Play</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default App;