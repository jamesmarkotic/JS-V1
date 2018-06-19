// 1
const pets = ['cat', 'dog', 'bird'];
_.each([1, 2, 3], function (pets) {
    console.log(pets);
});

// 2
const checking = ['help', 'i', 'am', 'sick'];

const checkValue = function (arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
        // else {
        //     return false;
        // }

    }
    return false;
}

checkValue(checking, 'i');

// 3
const checking = ['help', 'i', 'am', 'sick'];

const checkValue = function (arr, value) {
    result = false;
    _.each(arr, function (incVal) {
        if (incVal === value) {
            result = true;
        }
    });
    return result;
}

checkValue(checking, 'i');

// 4
const numValue = { two: 2, four: 4, three: 3, twelve: 12 };
const numArr = [];

_.each(numValue, function (val, key, list) {
    numArr.push(key);
});

// 5
const numValue = { two: 2, four: 4, three: 3, twelve: 12 };

const numArr = _.map(numValue, function (val, key, list) {
    return val;
});

// 6
const numValue = { two: 2, four: 4, three: 3, twelve: 12 };

const numArr = _.filter(numValue, function (val) {
    if (val % 2 === 0) {
        return val;
    }
});