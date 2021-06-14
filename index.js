// Code your solutions in this fileconst gifts = ["teddy bear", "drone", "doll"]
function writeCards(names, event) {
    let newArr = [];
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return newArr;
}


writeCards('name', 'event');

function countDown(init = 10) {
    while (init >= 0) {
        console.log(init--);
    }
}
