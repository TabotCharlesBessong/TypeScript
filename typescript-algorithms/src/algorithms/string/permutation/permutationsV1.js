"use strict";
exports.__esModule = true;
exports.permutationsV1 = void 0;
/**
 * Check if the string a is a permutation of the string b
 * @param  {string} a
 * @param  {string} b
 * @returns boolean
 */
function permutationsV1(a, b) {
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    var dict = {};
    for (var i = 0, j = a.length; i < j; i++) {
        dict[a[i]] = (dict[a[i]] || 0) + 1;
        dict[b[i]] = (dict[b[i]] || 0) + 1;
    }
    return !Object.values(dict).find(function (v) { return v % 2 != 0; });
}
exports.permutationsV1 = permutationsV1;
