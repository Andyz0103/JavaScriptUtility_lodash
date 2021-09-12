/**
 * Get the raw type string of a value, e.g., [object Object] (Copy from Vue).
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @returns {String} The raw type string.
 * @example
 *
 * [null, undefined, 1, 1.1, NaN, 'str', true, false, /a-z/, {key: 'value'}, [1], Object.defineProperties].forEach(function(val) { console.log(testFn('toRawType', val)) })
 * 
 * toRawType(null) = Null
 * toRawType(undefined) = Undefined
 * toRawType(1) = Number
 * toRawType(1.1) = Number
 * toRawType(NaN) = Number
 * toRawType(str) = String
 * toRawType(true) = Boolean
 * toRawType(false) = Boolean
 * toRawType(/a-z/) = RegExp
 * toRawType({"key":"value"}) = Object
 * toRawType([1]) = Array
 * toRawType(Object.defineProperties) ==> Function
 * 
 */
function toRawType(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
}

export default toRawType