require("../parse-ply.js")(process.stdin, function(err, ply) {
  console.log(ply);
});