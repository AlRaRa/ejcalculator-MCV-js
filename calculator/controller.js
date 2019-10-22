const calculatorController = (function() {
  this.service;
  function init(service, view) {
    this.service = service;
    this.view = view;
    this.factoryCommand = {
      add: this.addCommand.bind(this),
      sub: this.subCommand.bind(this),
      mul: this.mulCommand.bind(this),
      div: this.divCommand.bind(this),
      create: function(action, number) {
        return this[action](number);
      }
    };
    this.view.addEvents(
      this.calculate.bind(this),
      this.service.undo.bind(this.service)
    );
  }

  function addCommand(value) {
    return new Command(this.service.add, this.service.sub, value);
  }

  function subCommand(value) {
    return new Command(this.service.sub, this.service.add, value);
  }

  function mulCommand(value) {
    return new Command(this.service.mul, this.service.div, value);
  }

  function divCommand(value) {
    return new Command(this.service.div, this.service.mul, value);
  }

  function calculate(action, value, log) {
    return this.service.execute(this.factoryCommand.create(action, value), log);
  }

  return {
    init,
    addCommand,
    subCommand,
    mulCommand,
    divCommand,
    calculate
  };
})();
