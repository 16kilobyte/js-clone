/* global describe, it */
var assert = require('assert');
var deepClone = require('./');

describe('deepClone', function() {
    
    var testObj;
    var clonedObj;

    before( function() {
        testObj = {
            a: 2,
            b: {
                c: "A Name",
                d: function(param) {
                    return param
                },
                e: {
                    f: 4,
                    g: 67,
                    h: [2, 6, Number]
                },
                g: false
            },
            j: new Date(),
            k: /^[0-9]/
        };
    });

    beforeEach( function() {
        clonedObj = deepClone(testObj);
    });

    it('should clone testObj', function() {
        assert.deepEqual(testObj, clonedObj);
    });

    it('should not be \'equal\'', function() {
        clonedObj.a = 3;
        assert.notDeepEqual(testObj, clonedObj);
    });

    it('should not be \'equal\'', function() {
        clonedObj.b.g = true;
        assert.notDeepEqual(testObj, clonedObj);
    });

    it('should not be \'equal\'', function() {
        clonedObj.b.e.h[0] = 1;
        assert.notDeepEqual(testObj, clonedObj);
    });

});