import Todoitem from './Todoitem';
import './Todolist.css'

const Todolist = () => {
    return (
        <div className="Todolist">
            <h4>Todo List</h4>
            <input className="TodoSearch" placeholder="Type..." />
            <div className='list_wrapper'>
                <Todoitem />    
                <Todoitem />  
                <Todoitem />  
            </div>
        </div>
    );
}

export default Todolist;