import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import DelayedToggle from './index.jsx';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');
    fireEvent.click(toggleButton);
    await waitFor(() => expect(screen.getByText('야호!!')), { timeout: 2000 });
  });
});
