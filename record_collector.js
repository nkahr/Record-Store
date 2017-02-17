var RecordCollector = function(funds) {
  this.funds = funds;
  this.records = [];
};

RecordCollector.prototype = {
  buyRecord: function(record, recordStore) {
    var doesRecordExist = recordStore.sellRecord(record);
    if (doesRecordExist) {
      this.records.push(record);
      this.funds -= record.price;
      return true;
    } else {
      return false;
    }
  }, 

  sellRecord: function(record) {
    for (var i = 0; i < this.records.length; i++) {
      if (this.records[i] === record) {
        this.records.splice(i, 1);
        this.funds += record.price;
        return true;
      } 
    }
    return false;
  }
  
};


module.exports = RecordCollector;