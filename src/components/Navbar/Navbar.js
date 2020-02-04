import React, { Component } from 'react';
import './Navbar.css';
import { NavLink} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="container">
                {/* <a onClick={this.props.onclick}href="#home">HOME</a> */}
                <NavLink to='/' name='home'>HOME</NavLink>
                <NavLink to='/items'name='Items'>ITEMS</NavLink>
                {/* <a onClick={this.props.onclick}href="#items">ITEMS</a> */}
                <a onClick={this.props.onclick}href="#report">REPORTS</a>
                <a onClick={this.props.logout}href="#log">LOG OUT</a>
                <a onClick={this.props.onclick}href="#user">USER</a>
            </div>
        )
    }
}

export default Navbar;

