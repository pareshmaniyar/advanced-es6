//HackerRank test for Marketfront Hyd
function reformatDate(dates) {
    // Write your code here
    var newDates = "";
    // var arr = dates.split(" ");
    // console.log("arr: ", arr);
    newDates = dates + "";
    var resss = '';
    var len = dates.length;
    var flag = false;
    if(newDates.substr(1,1) == "t"){
        flag = true;
    }
    resss = resss + newDates.substring(len - 4,len) + '-';
    var month = {"Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"};
    if(flag){
        resss = resss + month[newDates.substring(4, 7)] + '-';
    } else {
        resss = resss + month[newDates.substring(5, 8)] + '-';
    }
    if(flag){
        resss = resss + '0' + newDates.substring(0,1);
    } else {
        resss = resss + newDates.substring(0,2);
    }
    return resss + "";
}

console.log(reformatDate("20th Oct 2052"));
console.log(reformatDate("6th Jun 1933"));
console.log(reformatDate("26th May 1960"));
console.log(reformatDate("20th Sep 1958"));
console.log(reformatDate("16th Mar 2068"));
console.log(reformatDate("25th May 1912"));
console.log(reformatDate("16th Dec 2018"));
console.log(reformatDate("26th Dec 2061"));
console.log(reformatDate("4th Nov 2030"));
console.log(reformatDate("28th Jul 1963"));