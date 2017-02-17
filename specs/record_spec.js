var Record = require('../record');
var assert = require('assert');

describe("Record", function() {

  var record;

  beforeEach("Setup", function() {
    record = new Record("What Went Down", "Foals", 15);
  });

  it("record should have a title", function() {
    assert.equal("What Went Down", record.title);
  });

  it("record should have an artist", function() {
    assert.equal("Foals", record.artist);
  });

  it("record should have a price", function() {
    assert.equal(15, record.price);
  });

});