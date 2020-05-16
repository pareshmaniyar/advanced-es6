
[
  {
    "name": "x1",
    "value": "100",
  },
  {
    "name": "x11",
    "value": "101",
  }
]

const data = [
  {
    "name": "x1",
    "value": "100",
    "levels": [
      {
        "name": "x11",
        "value": "101",
        "levels": [
          {
            "name": "x12",
            "value": "1011"
          },
          {
            "name": "x13",
            "value": "10110",
            "levels": [
              {
                "name": "x131",
                "value": "9090",
                "levels": [
                  {
                    "name": "x1311",
                    "value": "1101123"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "x2",
    "value": "100",
    "levels": [
      {
        "name": "x21",
        "value": "201",
        "levels": [
          {
            "name": "x22",
            "value": "2011"
          },
          {
            "name": "x23",
            "value": "20110"
          }
        ]
      },
      {
        "name": "x22",
        "value": "202"
      }
    ]
  }
];
const small = [
    {
        "name": "x12",
        "value": "1011"
    },
    {
        "name": "x13",
        "value": "10110",
        "levels": [
            {
                "name": "x131",
                "value": "9090",
                "levels": [
                    {
                    "name": "x1311",
                    "value": "1101123"
                    }
                ]
            }
        ]
    }
]

let result = [];
function getArray(arr, index){
  arr.forEach((obj) => {
    result.push({
      "name": obj["name"],
      "value": [obj["value"]]
    })
    if(index != undefined) {
      result[index].value.push(obj["value"]);
    }
    let lastIndex = result.length - 1;
    if(obj.hasOwnProperty("levels")){
      getArray(obj["levels"], lastIndex);
    }
  })
}
 
function generateArray(arr){
    let res = [];
    arr.forEach((item) => {
        console.log("item: ", item);
        if(item.hasOwnProperty("levels")) {
            let val = generateArray(item["levels"]);
            // console.log("values: ", val);
            let values = [];
            for(let i=0;i < val.length;i++){
                values.push(...val[i].value);
                i = i + (val[i].length - 1);
            }
            res.push({
                "name": item["name"],
                "value": [item["value"], ...values]
            }, ...val);
        } else {
            res.push({
                "name": item["name"],
                "value": [item["value"]]
            });
        }
    });
    return res;
}
// generateArray(small);
console.log(generateArray(data));
// console.log(JSON.stringify(generateArray(small)));
// console.log(result);
