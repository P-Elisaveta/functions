// BEGIN
const GFriends = (users) => {
    let friends = [];
    for (let user of users) {
        friends.push(user.friends);
    }
    const girlFr = friends.flat().filter(friend => friend.gender == 'female');
    return girlFr;
}

export default GFriends;
// END