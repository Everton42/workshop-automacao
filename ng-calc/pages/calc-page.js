class CalcPage{
    constructor() {
        this.path = 'https://juliemr.github.io/protractor-demo/';
        this.numberOne = element(by.model('first'));
        this.numberTwo = element(by.model('second'));
        this.btnGo = element(by.id('gobutton'));
        this.result = element(by.binding('latest'));
        this.comboOperador = element(by.model('operator'));
    }
    with(valor1, valor2, operador){
        this.numberOne.sendKeys(valor1);
        this.numberTwo.sendKeys(valor2);
        this.comboOperador.sendKeys(operador);
        this.btnGo.click();
    }
}
module.exports = CalcPage;