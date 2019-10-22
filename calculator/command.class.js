const Command = function(execute, undo, value) {
  this.name = execute.name;
  this.execute = execute;
  this.undo = undo;
  this.value = value;
};
