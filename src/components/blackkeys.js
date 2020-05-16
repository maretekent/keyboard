import React, { Component } from "react";
import "../css/blackkeys.css";

class BlackKey extends Component {
    /*
     * Desc:
     * This component creates black note on the keyboard
     *
     * Props:
     *
     * no props at the moment, since we don't need letter on black notes
     * 
     * Usage:
     *
     * <BlackKey />
     *
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="key black-key"></div>
        );
    }


}

export default BlackKey;