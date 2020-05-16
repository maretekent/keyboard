import React, { Component } from "react";
import PropTypes from 'prop-types';
import capitalise from "../utils/fomart";
import "../css/whitekeys.css";

class WhiteKey extends Component {
    /*
     * Desc:
     * This component creates white note on the keyboard
     *
     * Props:
     *
     * letter: (required) is an object of char represented on the keyboard
     * someFunc : a function meant to handle onclick mouse event
     * 
     * Usage:
     *
     * <WhiteKey letter={letter} onClick={someFunc}/>
     *
     */
    constructor(props) {
        super(props);
    }

    render() {
        const capitalised = capitalise(this.props.letter);
        return (
        <div className={`key white-key ${this.props.letter} ${this.props.highlight}`} onClick={() => this.props.onClicked(this.props.letter)}><span className="note-letters">{capitalised}</span></div>
        );
    }


}

WhiteKey.propTypes = {
    letter: PropTypes.string.isRequired
  };

export default WhiteKey;