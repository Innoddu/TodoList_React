import './App.css';
import Header from './component/Header.js'
import Writer from './component/Writer.js'
import Todolist from './component/Todolist.js'
import Todoitem from './component/Todoitem'

function App() {
  return (
    <div className="App">
          <Header />
          <Writer />
          <Todolist />
    </div>
  );
}

export default App;
