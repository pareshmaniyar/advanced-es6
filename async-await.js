console.log("Hello World");
(async function() {
  console.log("Before promise intialisation");
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: "Vashi", value: "Black Sheep"}), 5000);
  });
  let result = await promise;
  console.log("result is "+ JSON.stringify(result));
})();

