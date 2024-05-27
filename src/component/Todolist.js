import { useState } from "react";
import Todoitem from './Todoitem';
import './Todolist.css'

const Todolist = ({ todo, onUpdate, onDelete }) => {

    // Filtering User Input
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === "" 
        ? todo
        : todo.filter((it) =>  it.content.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <div className="Todolist">
            <h4>Todo List🌱</h4>
            <input
            value={search} 
            onChange={onChangeSearch}
            className="TodoSearch"
            placeholder="Type..." />
            <div className='list_wrapper'>
                {/* {
                    todo.map( (it) => (<Todoitem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />))
                } */}
                {
                /* Read Rendering to Todoitem itereate through todo props */
                /* key value is unique id */
    
                // Get Search
                getSearchResult().map( (it) => (<Todoitem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />))
                   
                }
          
              
            </div>
        </div>
    );
}

export default Todolist;