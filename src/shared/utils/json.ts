export const objectWithBoolean = (obj = {}) => ({
    ...Object.keys(obj).reduce(
        (acc, curr) => ({
            ...acc,
            [curr]: obj[curr] === 'true' ? true : obj[curr] || false,
        }),
        {}
    ),
});
