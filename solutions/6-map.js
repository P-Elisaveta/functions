// BEGIN
const getChildren = (users) => {
    let childrens = users.map(user => user.children)
    let flatChildren = childrens.flat();
    return flatChildren
}

export default getChildren;
// END