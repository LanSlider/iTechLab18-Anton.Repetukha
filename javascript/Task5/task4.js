// function doAsync() {
//   return new Promise((resolve) => {
//     resolve();
//   })
// }

doAsync()
  .then(function () {throw new Error('nope')})
  .catch(function(err) {console.log(err)});

//или

doAsync()
  .then(function () {throw new Error('nope')})
  .then(null, function(err) {console.log(err)});