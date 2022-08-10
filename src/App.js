import logo from './logo.svg';
import './App.css';
import './style.scss';
import Fillter from './component/filter/Filter';
import AddTodo from './component/addTodo/AddTodo';
import TodoList from './component/todoList/TodoList';
import store from './redux/store';
import { useSelector } from 'react-redux/es/exports';

function App() {
  console.log(useSelector(state => state.todos))
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
