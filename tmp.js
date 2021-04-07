Object.toJSON = function (a) {
    var b = typeof a;
    switch (b) {
        case 'undefined':
        case 'function':
        case 'unknown':
            return;
        case 'boolean':
            return a.toString()
    }
    if (a === null)
        return 'null';
    if (a.toJSON)
        return a.toJSON();
    if (Object.isElement(a))
        return;
    var c = [];
    for (var d in a) {
        var e = Object.toJSON(a[d]);
        if (!Object.isUndefined(e))
            c.push(d.toJSON() + ': ' + e)
    }
    return '{' + c.join(', ') + '}'
};

Object.isElement = function(a) {
    return a && a.nodeType == 1
};

Array.prototype.toJSON = function () {
    var c = [];
    this.each(function (a) {
        var b = Object.toJSON(a);
        if (!Object.isUndefined(b))
            c.push(b)
    });
    return '[' + c.join(', ') + ']'
}

Promise.reject(new Error('bla'))