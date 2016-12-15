var fs = require('fs');

module.exports = {
    read: read,
    write: write
};

// --------- Public API --------- //

function read(file_name){
    var result = null;
    fs.readFile(file_name  ,function(err,data){
        if(data != null) {
            result = JSON.parse(data.toString());
        }
    });
    return result;
}

function write(file_name,json){
    fs.writeFile(file_name,JSON.stringify(json));
}

// --------- Public API --------- //