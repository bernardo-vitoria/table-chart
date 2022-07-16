import { Page } from 'components';
import { render } from '@testing-library/react';

describe('<Page/>', () => {
  it('should render properly', () => {
    const { queryByTestId } = render(
      <Page>
        <div data-testid="children">mock</div>
      </Page>,
    );

    const page = queryByTestId('page');
    const children = queryByTestId('children');

    expect(page).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
