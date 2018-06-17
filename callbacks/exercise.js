// First
var funcCaller = function (func, arg) {
    return func(arg);
}
funcCaller(function (arg) { console.log(arg) }, 'What?');

// Second
var firstVal = function (arr, func) {
    func(arr[0], 0, arr);
};

// Third
var firstVal = function (storage, func) {
    if (Array.isArray(storage)) {
        func(storage[0], 0, storage);
    }
    else {
        for (var i in storage) {
            return func(storage[i], i, storage);
        }
    }
};