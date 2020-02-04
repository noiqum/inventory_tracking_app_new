import React from 'react';
import './Item_list.css';

function ItemList(props) {
    return (
        <div className="item_list">
           {props.children} 
        </div>
    )
}

export default ItemList;
