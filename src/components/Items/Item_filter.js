import React from 'react';
import './Item_filter.css';

function ItemFilter(props) {
    return (
        <div className="Item_filter">
            
            <button onClick={props.onclick}className="filter_button">Show All</button>
            <button onClick={props.onclick}className="filter_button">Kitchen</button>
            <button onClick={props.onclick}className="filter_button">Office</button>
            <button onClick={props.onclick}className="filter_button">Maintance</button>
            <button onClick={props.onclick}className="filter_button">Amount: 0 </button>

        </div>
    )
}

export default ItemFilter;
