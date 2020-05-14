str = 'abcdefg';
strSplit = str.split('');
console.log(strSplit);//[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
strSplit2 = str.split('d');
console.log(strSplit2);//[ 'abc', 'efg' ]
strRev2 = strSplit2.reverse();
console.log(strRev2);
strJoin = strRev2.join("d");
console.log(strJoin);
strJoin2 = strRev2.join("a");
console.log(strJoin2);
strJoin3 = strRev2.join("ga");
console.log(strJoin3);
strRev = strSplit.reverse();
console.log(strRev);//[ 'g', 'f', 'e', 'd', 'c', 'b', 'a' ]
revStr = str.split('').reverse().join("x");
console.log(revStr + ' with xin b/w');
console.log(str);
console.log("asbcasbca".match(/bca/));
console.log("asbcasbca".indexOf("bca"));
