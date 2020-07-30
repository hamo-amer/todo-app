import React, { useState } from 'react';
import TodoItem from "./TodoItem";
import './App.css';

function App() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const[oldInputValue, setOldInputValue] = useState("");
    const addItem=event=> {
        if(input==="") { return }
        
        var index = items.indexOf(oldInputValue);
        if(index!==-1){
            items[index] = input;
            setItems(prevData => {return items})
        } else {
            setItems(prevData => {
                return [...prevData, input];
            });
        }
        
        setInput("");
    }
    const removeItem=id=> {
        setItems(prevData=> { return prevData.filter((item,index)=>index !== id)});
    }
 const editItem=id=> {
     let value = items.find((el,index)=> index===id );
    setInput(value);
    setOldInputValue(value);
 }

    return (
      <div className="todolist">
          <div className="heading">
              <h1 className="title">To-Do List</h1>
          </div>
          <div>
              <input
                  type="text"
                  value={input}
                  onChange={(event) => {setInput(event.target.value)}}
              />
              <button onClick={addItem}>Add</button>
         </div>
          <div className="items">
            <ul>
                {items.map((item, index) => (
                    <TodoItem
                        key={index}
                        id={index}
                        item={item}
                        onCheck={removeItem}
                        editItem={editItem}
                    />
                ))}
            </ul>
          </div>
      </div>
    );
}

export default App;

