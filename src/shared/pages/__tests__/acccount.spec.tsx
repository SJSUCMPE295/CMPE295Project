import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import AccountPage from '../Account/Account';
import { withAppProviders } from '../../../utils/test-utils';
const AccountPageWithApp = withAppProviders(AccountPage);
describe('<AccountPage {...defaultProps} />', () => {
    afterEach(cleanup);
    it('should render element', () => {
        const { container } = render(<AccountPageWithApp />);
        expect(container).toMatchSnapshot();
    });
    it('should render text content', () => {
        const { getByText } = render(<AccountPageWithApp />);
        expect(getByText('Email Address')).toBeInTheDocument();
    });
});
