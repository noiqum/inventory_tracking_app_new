import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSearch, faTrash} from "@fortawesome/free-solid-svg-icons";
import "./Iconbar.css";


 function Iconbar(props) {
    

    return (
        <div className="column">
            <FontAwesomeIcon fixedWidth className="icony" size="5x" icon={faPlus}/>
            <FontAwesomeIcon fixedWidth className="icony" size="5x" icon={faMinus}/>
            <FontAwesomeIcon fixedWidth className="icony" size="5x" icon={faSearch}/>
            <FontAwesomeIcon fixedWidth className="icony" size="5x" icon={faTrash}/>
        </div>
    )
}

export default Iconbar;