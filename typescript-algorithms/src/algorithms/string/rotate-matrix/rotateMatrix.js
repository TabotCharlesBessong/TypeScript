"use strict";
exports.__esModule = true;
exports.rotateMatrix = void 0;
/**
 * Rotate the matrix by 90 degrees
 * @param  {number[][]} matrix
 * @returns number
 */
function rotateMatrix(matrix) {
    var output = JSON.parse(JSON.stringify(matrix));
    var len = output.length - 1;
    for (var i = 0; i < output.length; i++) {
        for (var j = 0; j < output.length; j++) {
            output[j][len - i] = matrix[i][j];
        }
    }
    return output;
}
exports.rotateMatrix = rotateMatrix;
console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
