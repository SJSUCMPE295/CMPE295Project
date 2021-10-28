import React from 'react';
import { object } from '@storybook/addon-knobs';
import Page from '..';
import { withRedux } from '../../../../utils/test-utils';
import { defaultData } from './fixtures';
const PageWithRedux = withRedux(Page);

export default {
    component: Page,
    title: 'Home Page',
};

export const _Default = () => {
    const mockData = object('object', defaultData);
    return <PageWithRedux data={mockData} />;
};
