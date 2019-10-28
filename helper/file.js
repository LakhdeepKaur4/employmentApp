var fs = require('fs');
var path = require('path');

// function to encode file data to base64 encoded string
module.exports.base64_encode = (fileName) => {
    // read binary data
    if (fileName) {
        filePath = path.join(process.cwd(), `/public/forms/${fileName}.pdf`);
        var bitmap = fs.readFileSync(filePath);
        // convert binary data to base64 encoded string
        return new Buffer(bitmap).toString('base64');
    }else{
        return 'No file found';
    }
}
