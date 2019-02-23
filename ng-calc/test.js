
let url = 'https://juliemr.gxithub.io/protractor-demo/';

describe('Calcular', () => {

    // Executar sempre antes de cada execução
    beforeEach(() => {
        browser.get(url);

        //numberOne = elementSelector(model, 'first');
        numberOne = element(by.model('first'));
        numberTwo = element(by.model('second'));
        btnGo = element(by.id('gobutton'));
        result = element(by.binding('latest'));
        comboOperador = element(by.model('operator'));
    })

    xit('Quando eu quero somar valores', () => {
        numberOne.sendKeys(40);
        numberTwo.sendKeys(2);
        btnGo.click();
        expect(result.getText()).toEqual('42');
    });

    xit('Quando eu quero subtrair valores', () => {
        numberOne.sendKeys(40);
        numberTwo.sendKeys(2);
        comboOperador.sendKeys('-');
        btnGo.click();
        expect(result.getText()).toEqual('38');
    });

    xit('Quando eu quero dividir valores', () => {
        numberOne.sendKeys(40);
        numberTwo.sendKeys(2);
        comboOperador.sendKeys('/');
        btnGo.click();
        expect(result.getText()).toEqual('20');
    });

    xit('Quando eu quero multiplicar valores', () => {
        numberOne.sendKeys(40);
        numberTwo.sendKeys(2);
        comboOperador.sendKeys('*');
        btnGo.click();
        expect(result.getText()).toEqual('80');
    });

    xit('Quando eu quero modulo valores', () => {
        numberOne.sendKeys(40);
        numberTwo.sendKeys(2);
        comboOperador.sendKeys('%');
        btnGo.click();
        expect(result.getText()).toEqual('0');
    });
})