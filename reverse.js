const greetings = 'hello ! how are you';
function reverseString(text){
    let reversed = '';//string er lowest  value aita zero aikane initial value
    for(const letter of text){
        // console.log(letter);
        reversed = letter + reversed;//letter er pore reversed add korbe
    }
    return reversed;
}

const reverse = reverseString(greetings);
console.log(reverse);

//problem 4

function perfectFriend(myfriends){
    const unique = [];
    for(const element of myfriends){
        if(unique.indexOf(element).length == 5){
            unique.push(element);
            break;
        }
    }
    return unique;
}
const friends = perfectFriend(['karima', 'karim', 'rahima', 'rahim', 'anika']);
console.log(friends);