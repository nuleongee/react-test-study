import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import TodoForm from './index.jsx';

describe('<TodoForm />', () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const button = screen.getByText('등록');
    return {
      ...utils,
      input,
      button,
    };
  };

  it('has input and a button', () => {
    const { input, button } = setup();
    expect(input).toBeTruthy(); // 해당 값이 truthy 한 값인지 확인
    expect(button).toBeTruthy();
  });

  it('changes input', () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });
    expect(input.value).toBe('TDD 배우기');
    expect(input).toHaveAttribute('value', 'TDD 배우기'); // 속성값 존재 여부 확인
  });

  it('calls inInsert and clears input', () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert }); // props 가 필요 할땐 직접 파라미터로 전달
    // 수정
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });
    // 버튼 클릭
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith('TDD 배우기'); // onInsert가 'TDD 배우기' 파라미터가 호출됐어야함
    expect(input).toHaveAttribute('value', ''); // input이 비워져야함
  });
});
