"use strict";
function formatString(input, toUpper) {
    if (toUpper === true || toUpper === undefined) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
