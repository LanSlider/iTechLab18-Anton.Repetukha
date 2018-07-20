// let docs = ["a", "b", "c", "d","e"];

// function getAllDocs() {
//   return new Promise((resolve) => {
//     resolve(docs);
//   })
// }

// function remove(arr, i) {
//     delete arr[i];
// }

// getAllDocs().then(function (result) {
//   return Promise.all(result.map(function (elem, i) {
//       remove(result, i);  
//   }));
// }).then(function (result) { 
//   result.forEach((item, i) => {console.log(result[i])});
// });

// console.log(docs.length);

// getAllDocs()

db.getAllDocs().then(function (result) {
  return Promise.all(result.rows.map(function (row) { //forEach
    return db.remove(row.doc);  
  }));
}).then(function (arrayOfResult) {
  // All docs must be removed!
});