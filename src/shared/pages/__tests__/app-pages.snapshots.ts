import puppeteer from 'puppeteer';
describe('Visual Regression Tests', () => {
    let browser;
    beforeEach(async () => {
        browser = await puppeteer.launch();
    });
    it('renders correctly', async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:8500/app/dashboard');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    });
});
