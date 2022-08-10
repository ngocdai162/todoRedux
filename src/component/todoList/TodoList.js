import React from "react";
import { Button ,Input  } from 'antd';
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/slices/todoSlice";
import {CloseOutlined} from '@ant-design/icons';
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
    color: #222;
`;
const TodoListElement = styled.ul`
    list-style: none;
    padding: 0px;
    & li {
        color: #222;
        display: flex;
        & span:first-child {
           color: #fff;
           margin-right:10px;
           &:hover {
            cursor: pointer
           }
           svg {
            color: red;
            &:hover {
                color: #fff;
            }
           }
          }
    }
`;

const TodoList = () => {
    const todos = useSelector(todoSelector);
    const dispatch = useDispatch();
    const handleClickDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    return (
        <StyledTodoList>
          <StyledH1>Todos</StyledH1>
          <TodoListElement>
            {
                todos.map((todo)=> 
                    <li key={todo.id}>
                      <span onClick={()=>handleClickDelete(todo.id)}><CloseOutlined/></span>
                      <span>{todo.name}</span>
                    </li>
                )
            }
          </TodoListElement>
        </StyledTodoList>
    )
}
export default TodoList;