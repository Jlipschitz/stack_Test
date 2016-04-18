//constructor to store data
function DataHold() {
  this._size = 0;
  this._storage = {};
};

//prototype to push data and update size (++)
DataHold.prototype.push = function(data) {
  var size = ++this._size;
  this._storage[size] = data;
};

//prototype to remove last item put into the objects _size
DataHold.prototype.pop = function() {
  var size = this._size,
    deletedData;

//only run if size is there to avoid running when nothing is there and returning undefined
  if (size) {
    //store what is to be deleted in order to return it
    deletedData = this._storage[size];
    
    //remove and increment
    delete this._storage[size];
    this._size--;
  
    return deletedData;
  }
};

var Greetings = new DataHold();

//adds to Greetings._storage and increments Greetings._size
Greetings.push("hello"); 
Greetings.push("bye, bye"); 

//removes from Greetings._storage, increments Greetings._size and returns the data that was removed
Greetings.pop(); //removes "hello"
Greetings.pop(); //removes "bye, bye"
