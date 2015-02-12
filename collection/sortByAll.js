import baseEach from '../internal/baseEach';
import baseFlatten from '../internal/baseFlatten';
import baseSortBy from '../internal/baseSortBy';
import compareMultipleAscending from '../internal/compareMultipleAscending';
import isIterateeCall from '../internal/isIterateeCall';
import isLength from '../internal/isLength';

/**
 * This method is like `_.sortBy` except that it sorts by property names
 * instead of an iteratee function.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {...(string|string[])} props The property names to sort by,
 *  specified as individual property names or arrays of property names.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 26 },
 *   { 'user': 'fred',   'age': 30 }
 * ];
 *
 * _.map(_.sortByAll(users, ['user', 'age']), _.values);
 * // => [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
 */
function sortByAll(collection) {
  var args = arguments;
  if (args.length > 3 && isIterateeCall(args[1], args[2], args[3])) {
    args = [collection, args[1]];
  }
  var index = -1,
      length = collection ? collection.length : 0,
      props = baseFlatten(args, false, false, 1),
      result = isLength(length) ? Array(length) : [];

  baseEach(collection, function(value) {
    var length = props.length,
        criteria = Array(length);

    while (length--) {
      criteria[length] = value == null ? undefined : value[props[length]];
    }
    result[++index] = { 'criteria': criteria, 'index': index, 'value': value };
  });
  return baseSortBy(result, compareMultipleAscending);
}

export default sortByAll;