import getHelp, { createHandler } from '../gethelp';
import { mockRequest, mockResponse } from '../../utils/test-utils';

describe('get help route', () => {
    it('should have routes', () => {
        const routes = [
            { path: '/', method: 'post' },
            { path: '/', method: 'get' },
            { path: '/:id', method: 'get' },
            { path: '/:id', method: 'put' },
            { path: '/:id', method: 'delete' },
        ];

        routes.forEach((route) => {
            const match = getHelp.stack.find(
                (s) => s.route.path === route.path && s.route.methods[route.method]
            );
            expect(match).toBeTruthy();
        });
    });
    it('should create', async () => {
        const req = mockRequest();
        const resp = mockResponse();
        await createHandler(req, resp);
        expect(resp.send).toBeCalled();
    });
});
