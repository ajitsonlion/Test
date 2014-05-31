/**
 * Created by ajit on 31.05.14.
 *
 * Description: Stupid Test
 */


var should = require("should");
var assert = require("assert");

//var threeSeconds= require("seconds");

describe.("Test Framework", function () {
    it("Should have mocha installed and running", function () {
        assert.equal(true, true);
    });


    it("Should have should  installed and running", function () {
        true.should.equal(true);
    });


})
