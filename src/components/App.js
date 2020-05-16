import React, { Component, useState, useEffect } from "react";
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
            input: "",
            error: false,
            errorMessage: "",
            octave : ['c','d','e','f','g','a','b']
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
        const note = e.target.value;
        this.setState({ input: note});

        if (this.validateInput(note)) {
            this.setState({ 
                error: false,
                errorMessage: ""
            });
        }

     };

     validateInput = (playnotes) => {
        let status = false;
        if (playnotes instanceof Array){
                status = playnotes.every((item) => {
                    console.log("item:" + item.trim());
                    if (!this.state.octave.includes(item.trim())){ 
                    return false
                    } else {
                        return true;
                    }
                    
                });

        } else {
            if(this.state.octave.includes(playnotes.trim())){ status = true}
        }
        console.log("status: " + status)
        return status;
     };

    handlePlay = () => {
        const notes = this.state.input.trim();
        let playnotes = notes.split(",");
        let offset = 0;
        if (!this.validateInput(playnotes)) {
            this.setState({
                error: true,
                errorMessage: "You input may be empty or contains non octave notes"
            });
            return;
        }
        playnotes.map((item, i) => {
            
                setTimeout(() => {
                    console.log(item.trim()); 
                    this.setState({
                        played : item.trim(),
                        highlighted: item.trim()
                        });
                    }, 1000 + offset);
                    offset += 800;
            
             
        });
        
        console.log(this.state.input);
        console.log(notes);
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
        const capitalised = capitalise(this.state.played);
        return (<>
            <div className="container">
                <div className="header">
                    <h1>Piano</h1>
                </div>
                <div className="keyboard">
                    {this.renderOctaves(this.state.octave)}
                </div>
                <div className="results">
                    You played : {capitalised} 
                </div>
                <div className="results">
                    <div className="play-form">
                        <div className="my-form">
                            <div className="form-group">
                                <label>Enter notes to play <br/> (They should be delimited by a comma e.g. c,f,d,e)</label>
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                    name="name" 
                                    onChange={ this.handleChange }/>
                                <button className="button" type="submit" onClick={this.handlePlay}>Play</button>
                            </div>
                            {this.state.error && (
                                <div className="errors">{this.state.errorMessage}</div>
                            )}
                                 
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default App;