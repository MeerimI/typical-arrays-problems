exports.min = function min(array) {
    if (arguments.length == 0 || (array.length === 0)) {
        return 0
    }
    return Math.min(...array);
}

exports.max = function max(array) {
    if (arguments.length == 0 || (array.length === 0)) {
        return 0
    }
    return Math.max(...array);
}

exports.avg = function avg(array) {
    if (arguments.length == 0 || (array.length === 0)) {
        return 0
    }
    var c = 0;
    for (i = 0; i < array.length; i++) {
        c += array[i]
    }
    return c / array.length;
}