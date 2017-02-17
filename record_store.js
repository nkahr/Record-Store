var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

RecordStore.prototype = {

  addRecord: function(record) {
    this.inventory.push(record);
  }, 

  listInventory: function(record) {
    console.log(this.inventory);
  }, 

  sellRecord: function(record) {
    for (var i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i] === record) {
        this.inventory.splice(i, 1);
        this.balance += record.price;
        return true;
      } 
    }
    return false;
  }, 

  reportFinancialSituation: function() {
    var value = 0;

    this.inventory.forEach(function(item) {
      value += item.price;
    })

    return "Balance: " + this.balance + ", Value: " + value;
  }

};

module.exports = RecordStore;