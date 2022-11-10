import React, { useState } from 'react';
import {useSetRecoilState} from 'recoil';
import todoListState from '../atomAndSelector/todoListState';
import {TodoRecoil} from './todoRecoil';

const TodoItemCreator: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState<TodoRecoil[]>(todoListState);

    let id = 0;
    function getId() {
        return id++;
    }


    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList, 
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    const onChange = (event:any) => {
        setInputValue(event.target.value);
        console.log(inputValue)
    }

   
  return (
    <div>
        <input onChange={onChange} value={inputValue} type='text' />
        <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default TodoItemCreator