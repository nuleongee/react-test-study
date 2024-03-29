import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import TodoList from './index.jsx';

describe('<TodoList />', () => {
  const sampleTodos = [
    { id: 1, text: 'TDD 배우기', done: true },
    { id: 2, text: 'react-testing-library 사용하기', done: true },
  ];

  it('renders todos properly', () => {
    render(<TodoList todos={sampleTodos} />);
    screen.getByText(sampleTodos[0].text);
    screen.getByText(sampleTodos[1].text);
  });

  it('calls onToogle and onRemove', () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    render(<TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />);

    fireEvent.click(screen.getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    fireEvent.click(screen.getAllByText('삭제')[0]); // 첫번째 삭제 버튼을 클릭
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
