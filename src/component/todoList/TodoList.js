import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/slices/todoSlice";
import {CloseOutlined, EditOutlined, CheckOutlined} from '@ant-design/icons';
import { todoSelector } from "../../redux/selectors";
const StyledTodoList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 240px;
    margin-top: 50px;
    padding: {
        top: 30px;
        bottom: 10px;
    }
`;
const StyledH1 = styled.h1`
    font-size: 20px;
    color: #773a3a;
`;
const TodoListElement = styled.ul`
    list-style: none;
    padding: 0px;
    & li {
        color: #773a3a;
        display: flex;
        justify-content: space-between;
        
        svg {
         color: red;
         cursor: pointer;
         &:hover {
          color: #fff;
        }
    }
`;

const TodoList = () => {
    const todos = useSelector(todoSelector);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    
    return (
        <StyledTodoList>
          <StyledH1>Todos</StyledH1>
          <TodoListElement>
            {
                todos.map((todo)=> 
                    <li key={todo.id}>
                        <span>{todo.name}</span>
                        <span onClick={()=>handleDelete(todo.id)}><CloseOutlined/></span>
                    </li>
                )
            }
          </TodoListElement>
        </StyledTodoList>
    )
}
export default TodoList;