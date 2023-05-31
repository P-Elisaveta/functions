// BEGIN
const convert = (...dates) => {
    let convDates = []
    for (let i of dates) {
        let date = new Date(...i);
        convDates.push(date.toDateString())
    }
    return convDates;
}

export default convert;
// END