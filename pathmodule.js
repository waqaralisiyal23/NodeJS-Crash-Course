const path = require('path');

const basename = path.basename('./osmodule.js');
const dirname = path.dirname('./osmodule.js');
const extension = path.extname(__filename);     // __filename contains the path of current file
console.log(basename);
console.log(dirname);
console.log(extension);