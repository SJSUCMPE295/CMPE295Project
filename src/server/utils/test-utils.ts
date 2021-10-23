export const mockResponse = () => {
    const res: any = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn((x) => x);
    return res;
};

type optionType = {
    query?: any;
    params?: any;
    body?: any;
    sessionData?: any;
};
export const mockRequest = (options: optionType = {}) => {
    const { query = {}, params = {}, body = {}, sessionData = {}, ...rest } = options;
    return {
        get(name) {
            return jest.fn().mockReturnValue(name);
        },
        session: { data: sessionData },
        header: jest.fn(),
        query,
        body,
        params,
        ...rest,
    };
};
