import React from 'react';
import { useState } from 'react';
import {Input  } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchTodo } from '../../redux/slices/filterSlice';

// import { fillterSlice } from '../../redux/slices/fillterSlice';

const StyledFillter = styled.div`
    display: flex;
`;

const Fillter = () => {
    const dispatch = useDispatch();
    const [searchValue,setSearchValue] = useState('');
    const handleChange = (e)=> {
         setSearchValue(e.target.value)
         dispatch(searchTodo(e.target.value))
    }

    return (
       <StyledFillter>
          <Input placeholder="Search todo" onChange={handleChange} value = {searchValue}/>
       </StyledFillter>
            
    )
}
export default Fillter;