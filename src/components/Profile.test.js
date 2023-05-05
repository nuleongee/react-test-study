import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="nuleongee" name="누렁이" />);
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    const utils = render(<Profile username="nuleongee" name="누렁이" />);
    utils.getByText('nuleongee'); // velopert 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText('(누렁이)'); // (김민준) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/누/); // 정규식 /김/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
