import React, { useCallback, useRef, useState } from 'react';

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
  const nextId = useRef(3); //  새로 추가 할 항목에서 사용할 id

  const onInsert = useCallback(text => {
    // 새 항목 추가 후
    setTodos(prevState =>
      prevState.concat({
        id: nextId.current,
        text,
        done: false,
      }),
    );
    // nextId 값에 1 더하기
    nextId.current += 1;
  }, []);

  const onToggle = useCallback(id => {
    setTodos(prevState => prevState.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  }, []);

  const onRemove = useCallback(id => {
    setTodos(prevState => prevState.filter(todos => todos.id !== id));
  }, []);

  return (
    <>
      <TodoForm data-testid="helloworld" onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoApp;
