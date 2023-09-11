import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
    const [inputDetails, updateInputDetails] = useState("");
    const [items, setItems] = useState([]);

    const itemsEvent = (event) => {
        updateInputDetails(event.target.value);
    }

    const deleteItems=(id)=>{
        console.log("deleted"); 
        setItems(()=>{
            return items.filter((element,index)=>{
                return index!==id;
            })
        })

    }

    const upload = () => {
        setItems((prevDate) => {
            return [...prevDate, inputDetails];
        })
        updateInputDetails("");
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" onChange={itemsEvent} value={inputDetails} placeholder="Add a Item" />
                    <button onClick={upload}>+</button>
                    <ol>
                        {items.map((elements,index) => {
                            return <TodoList key={index} id={index} Select={deleteItems} text={elements}/>
                        })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;