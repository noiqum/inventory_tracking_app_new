import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import './SignUp.css';

 function SignUp(props) {
    
        return (
            <div className="frame">
                <FontAwesomeIcon icon={faClipboardList} size="7x" className="iconLog"/>
                <form action="#" method="post">
                    <input type="email" name="email" id="logEmail" placeholder="Email"/>
                    <input type="password" name="password" id="logPass" placeholder="Password"/>
                    <button onClick={props.onsubmit} type="button">Sign Me Up</button>
                </form>
            </div>
    )
    
}
export default SignUp;