/**
 * Test a function.
 *
 * @since 1.0.0
 * @category Function
 * @param {Function} fn The function to test.
 * @param {Array} args The arguments of the function to test.
 * @returns {String} The test result.
 * @example
 *
 * function add(lhs, rhs) { return lhs + rhs }
 * testFn('add', 1, 2)
 *
 * add(1,2) = 3
 */
const _toString = Object.prototype.toString
function testFn(fn, ...args) {
    return fn + "(" + args.reduce(function (str, arg) {
        if (!!str) str += ", "
        if (arg === null) str += "null"
        else if (arg === undefined) str += "undefined"
        else if (Array.isArray(arg) || _toString.call(arg) == '[object Object]' && arg.toString == _toString) str += JSON.stringify(arg)
        else if (_toString.call(arg) == '[object Function]') str += "Function " + arg.name
        else str += arg;
        return str
    }, "") + ") = " + fn.split('.').reduce(function (group, name) { return group[name] }, window)(...args);
}

export default testFn