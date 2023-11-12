const { exec } = require("child_process");

function executeJava(filepath, callback) {
  exec("java -cp , className ", (error, stdout, stderr) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, stdout);
    }
  }).stdin.write(javaCode);
}

module.exports = {
  executeJava,
};
