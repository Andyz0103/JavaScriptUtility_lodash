/**
 * Cache the result of a function.
 *
 * @since 1.0.0
 * @category Object
 * @param {Funtion} fn The funtion to cache.
 * @returns {Funtion} The cached function.
 * @example
 *
 * add = cacheFn(function () { return Array.from(arguments).reduce(function(total, num){return total += num}, 0) })
 * 
 * 
 */

function cacheFn(fn) {
    let cache = Object.create(null)
    return function () {
        const key = JSON.stringify(arguments)
        const hit = cache[key]
        return hit || (cache[key] = fn.apply(null, arguments))
    }
}

export default toRawType