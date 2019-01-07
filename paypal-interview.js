for (let i = 0; i <=5; i++) {
  setTimeout(function(i) {
    console.log(i);
  });
}
// var a = [1, 3, 4, 2, 3, 1, 4];

/* var output = {
    1: 2,
    3: 2,
    2: 1,
    4: 2
}*/

//

let x1 = 0;
var out = a.map(x => {
    if(x==='1'){
      x1= x1+1;  
    }
}
);
let obj= {}
var outa = a.reduce((t,x) => {
    // hasOwnProperty or if (obj[x] === undefined)
    if(obj.hasOwnProperty(x)) {
         //inc   
         obj[x] = obj[x] + 1;
    } else {
        //create
        obj[x] = 1 ;
    }
    if(x==='1')
    return x+t
  },0
);


var o = {
    x: 5,
    fn: () => {
        console.log(this.x);
    }
};

o.fn();

// class called Map
// Map.set('name', 'Bhargav');
// Map.get('name'); // Bhargav

class Map {
    set(key, value) {
        this.key = value;
    }
    get(key) {
        console.log(this.key);
    }
}
const x1 = new Map();

