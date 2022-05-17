const callback = function(x) {
return x * 5;
}
function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function(x) {
        x * 5;
    };
}