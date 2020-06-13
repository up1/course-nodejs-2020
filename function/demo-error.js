const callback = function(error, returnValue) {
    if(error) {
        console.log(error);
        return;
    }
    console.log(returnValue);
}

const someFunction = function(value, callback) {
    if(value) {
        callback(null, "Without error");
    } else {
        callback(new Error("With error"));
    }
}

someFunction(true, callback);
someFunction(false, callback);