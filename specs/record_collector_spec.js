var RecordStore = require('../record_store');
var Record = require('../record');
var RecordCollector = require('../record_collector');

var assert = require('assert');


describe("Record Collector", function() {

  var recordCollector;
  var recordStore;
  var record;

  beforeEach("Setup", function() {
    recordStore = new RecordStore("Some Record Store", "Edinburgh");
    recordCollector = new RecordCollector(50);
    record = new Record("Pedestrian Verse", "Frightened Rabbit", 15);
  });

  it('should have funds', function() {
    assert.equal(50, recordCollector.funds);
  });

  it('should start out with no records', function() {
    assert.equal(0, recordCollector.records.length);
  });

  it('should be able to buy record', function() {
    assert.equal(0, recordCollector.records.length);
    recordStore.addRecord(record);
    recordCollector.buyRecord(record, recordStore);
    assert.equal(1, recordCollector.records.length);
  });

  it('buying a record should decrease funds', function() {
    recordStore.addRecord(record);
    recordCollector.buyRecord(record, recordStore);
    assert.equal(35, recordCollector.funds);
  });

  it('cant sell record they dont own', function() {
    var canSellRecord = recordCollector.sellRecord(record);
    assert.equal(false, canSellRecord);
    assert.equal(50, recordCollector.funds);
    assert.equal(0, recordCollector.records.length);
  });

  it('can sell record they own', function() {
    recordStore.addRecord(record);
    recordCollector.buyRecord(record, recordStore);
    assert.equal(1, recordCollector.records.length);
    var canSellRecord = recordCollector.sellRecord(record);
    assert.equal(true, canSellRecord);
  });

});