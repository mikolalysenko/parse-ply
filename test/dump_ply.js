process.stdin.pipe(require("../parse-ply.js")()).on("data", function(ply) {
  console.log(ply);
});