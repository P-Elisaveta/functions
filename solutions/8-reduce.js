// BEGIN
const groupBy = (students, key) => {
    let groupedSt = [];
    for (let student of students) {
        let i = student[key];
        if (!groupedSt[i]) {
            groupedSt[i] = [];
        }
        groupedSt[i].push(student);
    }
    return groupedSt;
}
export default groupBy;
// END