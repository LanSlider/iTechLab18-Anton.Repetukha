// function loadVideosAsync() {
//       return new Promise ((resolve) => {
//             resolve('Videos');
//       })
// }

// function loadMetaAsync() {
//       return new Promise ((resolve) => {
//             resolve('Meta');
//       })
// }

// function DoSomething(arg1, arg2) {
//       console.log(JSON.stringify(arg1));
//       console.log(JSON.stringify(arg2));
// }

Promise.all([loadVideosAsync(), loadMetaAsync()])
   .then(function([videos, meta]) {
      DoSomething(videos, meta);
});