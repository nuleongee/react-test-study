import { render, screen } from '@testing-library/react';
import Profile from './Profile.jsx';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="nuleongee" name="누렁이" />);
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    render(<Profile username="nuleongee" name="누렁이" />);
    screen.getByText('nuleongee'); // nuleongee 라는 텍스트를 가진 엘리먼트가 있는지 확인
    screen.getByText('(누렁이)'); // (누렁이) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    screen.getByText(/누/); // 정규식 /누/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
