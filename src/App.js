import logo from './logo.svg';
import './App.css';
import './style.scss';
import Fillter from './component/fillter/Fillter';
import AddTodo from './component/addTodo/AddTodo';
import TodoList from './component/todoList/TodoList';

function App() {

  return (
    <div className="App">
      <div className='todo-app'>
        <Fillter/>
        <TodoList/>
        <AddTodo/>
      </div>
    </div>
  );
}

export default App;
