export const objectWithBoolean = (obj = {}) => ({
    ...Object.keys(obj).reduce(
        (acc, curr) => ({
            ...acc,
            [curr]: obj[curr] === 'true' ? true : obj[curr],
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
export const formatDate = (dateString, utcTime = false) => {
    const dateNow = new Date(dateString); // Creating a new date object with the current date and time
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
    const hour = utcTime ? dateNow.getUTCHours() : dateNow.getHours();
    const minutes =
        String(utcTime ? dateNow.getMinutes() : dateNow.getMinutes()).padStart(2, '0') || '00';
    const time = hour > 0 ? `T${hour}:${minutes}` : '';
    return `${year}-${month}-${date}${time}`; // combining to format for defaultValue or value attribute of material <TextField>
};

export const prettyDate = (selectedTime) => {
    const d = new Date(selectedTime);
    const date = d.toLocaleDateString('en-US', { timeZone: 'UTC' });
    const day = d.toLocaleTimeString('en-US', { timeZone: 'UTC' });
    return d ? `${date}  ${day}` : '';
};
