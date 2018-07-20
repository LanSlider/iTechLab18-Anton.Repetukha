db.getAllDocs().then(function (result) {
  return Promise.all(result.rows.forEach(function (row) {
    db.remove(row.doc);
  }));
}).then(function () {
  // All docs must be removed!
});