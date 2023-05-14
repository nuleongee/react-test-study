import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './index.jsx';

describe('<TodoForm/>', () => {
  it('has input and a button', () => {
    render(<TodoForm />);

    screen.getByPlaceholderText('할 일을 입력하세요');
    screen.getByText('등록');
  });

  it('changes input', () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });
    expect(input.value).toBe('TDD 배우기');
  });
});
