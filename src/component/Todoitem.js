import './Todoitem.css'
const Todoitem = () => {
    return (
        <div className="Todoitem">
            <div className="checkbox_col">
                <input type="checkbox" />
            </div>
            <div className='title_col'>todo</div>
            <div className='date_col'>{new Date().toLocaleDateString()}</div>
            <div className='btn_col'>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default Todoitem;