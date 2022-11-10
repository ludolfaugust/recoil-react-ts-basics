import React from 'react';
import { useRecoilState } from 'recoil';
import todoListState from '../atomAndSelector/todoListState';
import { TodoRecoil } from './todoRecoil';

interface Props {
    item: {id: number, text: string, isComplete: boolean };

}

const TodoItem: React.FC<Props> = (props) => {
   const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <div>{todoList.map((todo)=>(
        <h1>{todo.text}</h1>
    ))}</div>
  )
}

export default TodoItem