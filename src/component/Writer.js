import './Writer.css'
const Writer = () => {
    return (
        <div className="Writer">
            <h4>Add your ToDo ✏️</h4>
            <div className="editor_wrapper">
                <input placeholder="New Todo...." />
                <button>add</button>
            </div>
        </div>
    );
}

export default Writer;