
let url = 'https://juliemr.github.io/protractor-demo/';

describe('Calcular', () => {

    // Executar sempre antes de cada execução
    beforeEach(() => {
        browser.get(url);
        
        numberOne = element(by.model('first'));
        numberTwo = element(by.model('second'));
        btnGo = element(by.id('gobutton'));
        result = element(by.binding('latest'));
    })

    it('Quando eu quero somar valores', () => {
        numberOne.sendKeys(40);
        numberTwo.sendKeys(2);
        btnGo.click();
        expect(result.getText()).toEqual('42');
    });
})