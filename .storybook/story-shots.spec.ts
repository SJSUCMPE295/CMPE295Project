import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const path = require('path');

const storybookUrl = process.env.STORYBOOK_STATIC
    ? `file://${path.resolve(__dirname, '../storybook-static')}`
    : 'http://localhost:6006';

initStoryshots({
    suite: 'Image storyshots',
    test: imageSnapshot({
        storybookUrl,
        // @ts-ignore
        getMatchOptions: ({ context: { kind, story }, url }) => ({
            failureThreshold: 0.0001,
            failureThresholdType: 'percent',
            customDiffConfig: {
                threshold: 0.06, // 0-1 amount of difference in each pixel. eg #fffff and #00000 will have 100% difference
            },
        }),
    }),
});
