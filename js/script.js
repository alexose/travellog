componentWillMount: function() {
  var ref = new Firebase("https://travellog.firebaseio.com/items");
  this.bindAsArray(ref, "items");
}
