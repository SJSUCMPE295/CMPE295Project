import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import Page from '..';
import { withRedux } from '../../../../utils/test-utils';
import { defaultData } from './fixtures';
const PageWithRedux = withRedux(Page);
describe('<Page {...defaultProps} />', () => {
    afterEach(cleanup);
    it('should render element', () => {
        const { container } = render(<PageWithRedux data={defaultData} />);
        expect(container).toMatchSnapshot();
    });
    it('should render text content', () => {
        const { getByText } = render(<PageWithRedux data={defaultData} />);
        expect(getByText('English')).toBeInTheDocument();
    });
});
