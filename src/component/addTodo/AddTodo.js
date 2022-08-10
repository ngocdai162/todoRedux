import React from "react";
import { useState } from "react";
import { Button ,Input  } from 'antd';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {v4 as uuidv4 } from 'uuid';
import { addTodo } from "../../redux/slices/todoSlice";

const StyledTodo = styled.div`
    display: flex;
    padding-top: 50px;
`;

const AddTodo = () => {
   const dispatch = useDispatch();
   const [todoName, setTodoName] = useState('');
   const handleClick = () => {
      dispatch(addTodo({
        id:uuidv4(),    //uuidv4()  sinh ra một id ngẫu nhiên k trùng ,cách dùng :  npm install uuid -> import {v4 as uuidv4 } from 'uuid' -> uuidv4();
        name: todoName
      }))
      setTodoName('');
   }
   const handleInputChange = (e) => {
    setTodoName(e.target.value)
   }
    return (
        <StyledTodo>
          <Input placeholder="Add todo" onChange={handleInputChange} value={todoName}/> 
          <Button type="primary" width='80' onClick={handleClick}>Add</Button>
        </StyledTodo>
    )
}
export default AddTodo;