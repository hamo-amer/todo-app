import React from "react";
import './TodoItem.css';

function TodoItem({ id, item, onCheck,editItem }) {
    return (
        <div className="row-r">
        <li>{item} </li>
        <div className="buttoncolor">
        <button onClick={() => {onCheck(id)}}>x</button>
        <button onClick={()=>{editItem(id)}}>Edit</button>
        </div>
        </div>
    )
}
export default TodoItem; 