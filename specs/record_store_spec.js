var RecordStore = require('../record_store');
var Record = require('../record');

var assert = require('assert');


describe("Record Store", function() {

  var recordStore;
  var record;

  beforeEach("Setup", function() {
    recordStore = new RecordStore("Some Record Store", "Edinburgh");
    record = new Record("Oh, Inverted World", "The Shins", 15);
  });

  it('should have name', function() {
    assert.equal("Some Record Store", recordStore.name);
  });

  it('should have city', function() {
    assert.equal("Edinburgh", recordStore.city);
  });

  it('inventory should be empty', function() {
    assert.equal(0, recordStore.inventory.length);
  });

  it('can add record to inventory', function() {
    recordStore.addRecord(record);
    assert.equal(1, recordStore.inventory.length);
  });

  it('can sell record', function() {
    recordStore.addRecord(record);
    recordStore.sellRecord(record);
    assert.equal(15, recordStore.balance);
    assert.equal(0, recordStore.inventory.length);
  });

  it('function returns false if record doesnt exist', function() {
    assert.equal(false, recordStore.sellRecord(record));

  });

  it('can report on financial situation', function() {
    recordStore.addRecord(record);
    assert.equal("Balance: 0, Value: 15", recordStore.reportFinancialSituation());
  });

  it('can report on financial situation after selling', function() {
    recordStore.addRecord(record);
    recordStore.sellRecord(record);
    recordStore.addRecord(record);
    assert.equal("Balance: 15, Value: 15", recordStore.reportFinancialSituation());
  });

});