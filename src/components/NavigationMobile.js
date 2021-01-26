import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NavigationMobile extends Component {
    state = {
        isShown: false
    }
    toggleIsShown = () => {
        console.log("TEST");
        this.setState({ isShown: !this.state.isShown });
    }
    render() {
        return (
            <div>
                <h1 onClick={this.toggleIsShown}>X</h1>
                {/* <nav style={{ display: this.state.isShown ? 'block' : 'none' }}> */}
                <nav className={`menu ${this.state.isShown ? 'show' : 'none'}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                    </ul>
                </nav>
            </div>

        );
    }
}

export default NavigationMobile;

