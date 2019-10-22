const calculatorService = (function() {
  this.historyCommands;
  this.current;

  function init() {
    this.historyCommands = [];
    this.current = 0;
  }

  function execute(command, showLog) {
    this.current = command.execute(this.current, command.value);
    this.historyCommands = [...this.historyCommands, command];
    showLog(
      `${command.name} ${command.value} and the result is ${this.current}`
    );
    return this.current;
  }

  function undo(showLog) {
    this.historyCommands.length == 0
      ? showLog('Undo: Initial state')
      : this.doUndo(showLog);
    return this.current;
  }

  function doUndo(showLog) {
    const lastCommand = this.historyCommands.pop();
    this.current = lastCommand.undo(this.current, lastCommand.value);
    showLog(
      `Undo: ${lastCommand.name} ${lastCommand.value} and the result is ${this.current}`
    );
  }

  const add = (x, y) => x + y;

  const sub = (x, y) => x - y;

  const mul = (x, y) => x * y;

  const div = (x, y) => x / y;

  return {
    init,
    add,
    sub,
    mul,
    div,
    execute,
    undo,
    doUndo
  };
})();
