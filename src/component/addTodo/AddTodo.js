import React from "react";
import { useState } from "react";
import { Button ,Input  } from 'antd';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/action";
const StyledTodo = styled.div`
    display: flex;
    padding-top: 50px;
`;

const AddTodo = () => {
   const dispatch = useDispatch();
   const [todoName, setTodoName] = useState('');
   const handleClick = () => {
      dispatch(addTodo({
        id: '0',
        name: todoName
      }))
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