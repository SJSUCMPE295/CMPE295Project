import puppeteer from 'puppeteer';
describe('Visual Regression Tests', () => {
    let browser;
    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: true,
            ignoreHTTPSErrors: true,
            args: ['--window-size=1920,1080'],
            defaultViewport: {
                width: 1920,
                height: 1080,
            },
        });
    });
    it('renders correctly', async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:8500/app/dashboard');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    });
});
