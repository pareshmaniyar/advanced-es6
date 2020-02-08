
const arr = [
    {
    "userId": "1",
    "username": "Harish@sample.com",
    "password": "",
    "allowReply": true,
    "allowedCities": ["Chennai","Hyderabad"],
    "allowedModules": ["Review","Report"],
    "latestActivity": "23 Nov 19 8:45PM",
    "isSuperAdmin": true,
    "allowAllCities": true
    
  },
  {
    "userId": "2",
    "username": "samuel@sample.com",
    "password": "",
    "allowReply": false,
    "allowedCities": ["Chennai","Hyderabad"],
    "allowedModules": ["Review","Report"],
    "latestActivity": "23 Nov 19 8:45PM",
    "isSuperAdmin": false,
    "allowAllCities": false
    
  },
  {
    "userId": "3",
    "username": "jhon@sample.com",
    "password": "",
    "allowReply": true,
    "allowedCities": ["Chennai"],
    "allowedModules": ["Review","Report","Dashboard"],
    "latestActivity": "23 Nov 19 8:45PM",
    "isSuperAdmin": false,
    "allowAllCities": false
    
}]

function f1(p){
    // var res = [];
    //Approach 1: forEach
    // arr.forEach(i => {
    //     res.push(i[p]);
    // });
    //for of Object.entries/keys
    
    //Approach 3: map
    // return [].concat(...arr.map((i) => {
    //     if(i[p] instanceof Array){
    //        return [...i[p]];
    //     //    return i[p][0];
    //     }
    // }
    // ));

    return arr.reduce((acc, item) => {
        acc.push(...item[p]);
        return acc;
    },[]);
}
//reduce

const arr1 = f1("allowedModules");
console.log(arr1);
