import React from "react";
import { Button ,Input  } from 'antd';
import styled from "styled-components";
const StyledTodoList = styled.div`
    display: flex;
    padding: {
        top: 30px;
        bottom: 10px;
    }
`;
const StyledH1 = styled.h1`
    font-size: 20px;
    color: #fff;
    margin-top: 60px;
`;
const TodoList = () => {
    return (
        <StyledTodoList>
          <StyledH1>List</StyledH1>
        </StyledTodoList>
    )
}
export default TodoList;