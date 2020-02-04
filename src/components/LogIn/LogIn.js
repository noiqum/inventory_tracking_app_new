import React, { Component } from 'react';
import './LogIn.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

 class LogIn extends Component {
   


    render() {
        return (
                <div className="frame">
                    <FontAwesomeIcon icon={faClipboardList} size="7x" className="iconLog pulse"/>
                    
                        <input  onChange={this.props.email} type="email" name="email" id="logEmail" placeholder="Email" required/>
                        <input  onKeyPress={this.props.onkeypress} onChange={this.props.password}type="password" name="password" id="logPass" placeholder="Password" required/>
                        <button onClick={this.props.onsubmit} type="button">Log Me In</button>
                        <button onClick={this.props.toSignUp} type="button">Register</button>
                    
                </div>
        )
    }
}

export default LogIn
