export const objectWithBoolean = (obj = {}) => ({
    ...Object.keys(obj).reduce(
        (acc, curr) => ({
            ...acc,
            [curr]: obj[curr] === 'true' ? true : obj[curr] || false,
        }),
        {}
    ),
});
export const getDate = (daysFromToday = 0) => {
    let dateNow = new Date(); // Creating a new date object with the current date and time
    if (daysFromToday) {
        const today = new Date();
        const future = new Date(today);
        future.setDate(future.getDate() + daysFromToday);
        dateNow = future;
    }
    const year = dateNow.getFullYear(); // Getting current year from the created Date object
    const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
    const month = // Setting current Month number from current Date object
        monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 to adjust for date input.
            ? `0${monthWithOffset}`
            : monthWithOffset;
    const date =
        dateNow.getDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
            ? `0${dateNow.getDate()}`
            : dateNow.getDate();
    return `${year}-${month}-${date}`; // combining to format for defaultValue or value attribute of material <TextField>
};
