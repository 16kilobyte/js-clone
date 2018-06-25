/**
 * @type {Function}
 */
var toString = Object.prototype.toString;

/**
 * @description Clones an object using deep copy
 * 
 * @param {Object} sourceObject Object to clone
 * @returns {Object}  Cloned object.
 * @throws {Error}
 */
function deepClone(sourceObject) {

    if (!sourceObject || typeof sourceObject != "object") {
        // Any non-object (Boolean, String, Number), null, undefined, NaN
        return sourceObject;
    }

    // Honor native/custom clone methods
    if (sourceObject.clone && toString.call(sourceObject.clone) == "[object Function]") {
        return sourceObject.clone(deep);
    }

    // Date
    if (sourceObject instanceof Date) {
        var clone = new Date();
        clone.setTime(sourceObject.getTime());
        return clone;
    }

    // Array
    if (sourceObject instanceof Array) {
        var clone = [];
        for (var i = 0, len = sourceObject.length; i < len; i++) {
            clone[i] = deepClone(sourceObject[i]);
        }
        return clone;
    }

    // RegExp
    if (toString.call(sourceObject) == "[object RegExp]") {
        return new RegExp(sourceObject);
    }
    
    // DOM elements
    if (sourceObject.nodeType && toString.call(sourceObject.cloneNode) == "[object Function]") {
        // Deep clone the node
        return sourceObject.cloneNode(true);
    }

    if (sourceObject instanceof Object) {
        var clone = {};
        for (var key in sourceObject) {
            if (sourceObject.hasOwnProperty(key)) clone[key] = deepClone(sourceObject[key]);
        }
        return clone;
    }
    throw new Error("Unable to clone this object.");
}

if (typeof module === 'object' && module.exports) {
    module.exports = deepClone
}