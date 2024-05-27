import './Writer.css'
import React, {useState, useRef} from 'react'

const Writer = ({ onCreate }) => {

    const [textTodo, setTextTodo] = useState("");

    // User input todo
    const onChangeSetTextTodo = (e) => {
        setTextTodo(e.target.value);
    };
    
    const inputRef = useRef();
    const onSubmit = () => {

        // If the input is empty, can't add in the list
        if (!textTodo){
            inputRef.current.focus();
            return;
        }
        // Create Todo
        onCreate(textTodo);
        // Clear Input text
        setTextTodo("");
        // alert("Completely Added !");
    };

    // Add Todo List with Enter Key
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }


    return (
        <div className="Writer">
            <h4>Add your ToDo ✏️</h4>
            <div className="editor_wrapper">
                <input 
                ref={inputRef} 
                value={textTodo} 
                onChange={onChangeSetTextTodo}
                onKeyDown={onKeyDown}
                placeholder="New Todo...." />
                <button onClick={onSubmit}>add</button>
            </div>
        </div>
    );
}

export default Writer;