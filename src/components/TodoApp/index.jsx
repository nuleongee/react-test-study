import React, { useState } from 'react';

import TodoForm from '../TodoForm/index.jsx';
import TodoList from '../TodoList/index.jsx';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'TDD 배우기', done: true },
    {
      id: 2,
      text: 'react-testing-library 사용하기',
      done: true,
    },
  ]);

  return (
    <>
      <TodoForm data-testid="helloworld" />
      <TodoList todos={todos} />
    </>
  );
};

export default TodoApp;