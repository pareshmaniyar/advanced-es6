console.log("Hello World");
(async function() {
  console.log("Before promise intialisation");
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: "Vashi", value: "Black Sheep"}), 500);
  });
  let result = await promise;
  console.log("result is "+ JSON.stringify(result));
})();

(async function() {
  console.log("Error function started");
  try {
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Why so serious?")), 500);
    });
    let result = await promise;
    console.log("won't print this", result);
  } catch (err) {
    console.log("err is:", err);
  }
})();

