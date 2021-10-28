import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { jsxDecorator as withJsx } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import './page-layout.css';

addDecorator(withJsx);
addDecorator(withKnobs);
addDecorator(withInfo);

addParameters({
    options: {
        showPanel: true,
        panelPosition: 'bottom',
    },
});

addDecorator((story) => <div className="container-storybook">{story()}</div>);
