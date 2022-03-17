import puppeteer from 'puppeteer';
const routes = [
    '/app/account',
    '/app/customers',
    '/app/dashboard',
    '/app/products',
    '/app/medicalAssistance',
    '/app/lookformedicalAssistance',
    '/login',
    '/register1',
    '/register2',
    '/404',
];
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
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
    test.each(routes)('renders page for route %s', async (route) => {
        const page = await browser.newPage();
        await page.goto('http://localhost:8500' + route);
        const image = await page.screenshot();
        await page.waitFor(2000);
        expect(image).toMatchImageSnapshot();
    });
});
