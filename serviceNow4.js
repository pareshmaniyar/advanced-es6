process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function addNumbers(a, b) {
  return a+b  
}

/*

playlist generator
Given list of songs, 3-5 min songs
Generate a list of playlists for (an hour)
[3,5,4,6,2,1,3] - 8
return [[3,5], [6,2], [3,3,2]]
Brute force
parsedSongs {
    3: 2,
    4: 1,
    6: 1
}
- make a pair of min: [songs]
- recursion currVal, target, remainingSongs
    - if currVal > target return;
    - if(currVal === target)
        - mark in result
        - return
    - loop through remainingSongs
        - recursion currVal - songsVal, target, remainingSongs
- avoid dup
^ n!
1,2,3,4.....n

3,3,3,3.....n

    0 1 2 3 4 5 6 7 8
3   1 0 0 1 0
5   1 0 0 1 0 0 0 0 1
4
6
2
1
3   

- filling matrix add or not
- tracking back to find the result

*/

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = addNumbers(a, b);
    console.log("The sum is " + res);
}

/*

Aarogya setu
- large number of people
- nearby slots
- risk in your area

Req
1. Booking of a slot - Crucial - scale
2. risk in your area
3. nearby slots

1.5 billions users -> +/- -> location (lat, lng)

UserService
    - get no of users in location
    - update location data with user - +/-
    - user collection
    - location collections

Bottlenecks
Meetings slot -> status -> entry

- Database
    - NoSQL
    - SQL
    - redis

Load balancers
    - multiple

*/




