async function makeApiCall() { ... } 
// null , data

// function WrappedApiCall ()
// data, if(null) wait 5 sec; retry;

async function WrappedApiCall(){
	await result = makeApiCall();
  if(result == null) {
  	await sleep(5);
    return WrappedApiCall();
  } else {
  	return result;
  }
}
async f1(){
	setTimeout(() => {
  	result = makeApiCall();
  }, 5000);
}

function sleep(duration) {
	return Promise((resolve, reject) => {
  	setTimeout(() => {
    resolve();
    }, duration*1000);
  })
}

const data = WrappedApiCall();
