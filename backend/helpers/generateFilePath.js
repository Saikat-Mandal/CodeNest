const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

// name of the current directory + codes
const dirCodes = path.join(__dirname, "codes");

// if the dirCodes directoru does not exits then make it
if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, code) => {
  // create and unique id
  const jobId = uuid();

  //   make the code file name
  const filename = `${jobId}.${format}`;

  //   rename the file with the current working directory
  const filepath = path.join(dirCodes, filename);

  //   write inside the file at the given path
  await fs.writeFileSync(filepath, code);
  return filepath;
};

module.exports = {
  generateFile,
};
