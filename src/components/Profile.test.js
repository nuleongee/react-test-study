import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="nuleongee" name="누렁이" />);
    expect(utils.container).toMatchSnapshot();
  });
});
