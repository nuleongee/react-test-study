import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import TodoApp from './index.jsx';

describe('<TodoApp />', () => {
  it('renders TodoForm and TodoList', () => {
    render(<TodoApp />);
    screen.getByText('등록'); // TodoForm 존재 유무 확인
    screen.getByTestId('TodoList'); // TodoList 존재 유무 확인
  });

  it('renders two defaults todos', () => {
    render(<TodoApp />);
    screen.getByText('TDD 배우기');
    screen.getByText('react-testing-library 사용하기');
  });

  it('creates new todos', async () => {
    // render(<TodoApp />);
    render(<TodoApp />);
    // 이벤트를 발생시켜서 새 항목을 추가하면
    fireEvent.change(screen.getByPlaceholderText('할 일을 입력하세요'), {
      target: {
        value: '새 항목 추가하기',
      },
    });
    fireEvent.click(screen.getByText('등록'));
    // 해당 항목이 보여져야 함
    await screen.findByText('새 항목 추가하기');
  });

  it('toggles todo', () => {
    render(<TodoApp />);
    const todoText = screen.getByText('TDD 배우기');
    expect(todoText).toHaveStyle('text-decoration: line-through;');
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through;');
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through;');
  });

  it('removes todo', () => {
    render(<TodoApp />);
    const todoText = screen.getByText('TDD 배우기');
    const removeButton = todoText.nextSibling; // ! 노드에 직접 접근 지양
    fireEvent.click(removeButton);
    expect(todoText).not.toBeInTheDocument(); // 페이지에서 사라졌음을 의미
    // const removedText = screen.queryByText('TDD 배우기');
    // expect(removedText).toBeNull();
  });
});
