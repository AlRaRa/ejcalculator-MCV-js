const calculatorView = (function() {
  this.state;

  function init(view) {
    this.view = view;
    this.GUI = {
      buttonAdd: this.view.getElementById('add'),
      buttonSub: this.view.getElementById('sub'),
      buttonMul: this.view.getElementById('mul'),
      buttonDiv: this.view.getElementById('div'),
      buttonUnd: this.view.getElementById('und'),
      inputNumber: this.view.getElementById('number'),
      divResult: this.view.getElementById('result')
    };
  }

  function addEvents(handlerCalculate, handlerUndo) {
    this.GUI.buttonAdd.addEventListener('click', event => {
      this.clicked(handlerCalculate, event);
    });
    this.GUI.buttonSub.addEventListener('click', event => {
      this.clicked(handlerCalculate, event);
    });
    this.GUI.buttonMul.addEventListener('click', event => {
      this.clicked(handlerCalculate, event);
    });
    this.GUI.buttonDiv.addEventListener('click', event => {
      this.clicked(handlerCalculate, event);
    });
    this.GUI.buttonUnd.addEventListener('click', () => {
      const result = handlerUndo(this.log);
      this.printResult(result);
    });
  }

  function clicked(handlerCalculate, event) {
    const action = event.srcElement.id;
    const value = +this.GUI.inputNumber.value;
    const result = handlerCalculate(action, value, this.log);
    this.printResult(result);
  }

  function printResult(result) {
    this.GUI.divResult.innerHTML = result;
  }

  function log(msg) {
    console.log(msg);
  }

  return {
    init,
    addEvents,
    printResult,
    clicked,
    log
  };
})();
