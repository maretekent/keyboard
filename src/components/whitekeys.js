import React, { Component } from "react";
import "../css/whitekeys.css";

class WhiteKey extends Component {
    /*
     * Desc:
     * This component creates white note on the keyboard
     *
     * Props:
     *
     * letter: (required) is an object of char represented on the keyboard
     * 
     * Usage:
     *
     * <WhiteKey letter={letter} onApply={someFunc}/>
     *
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className={`key white-key ${this.props.letter}`}><span className="note-letters">{this.props.letter}</span></div>
        );
    }


}

export default WhiteKey;