const CalcPage = require('../pages/calc-page')

describe('Quando quero calcular', () => {
    const calcPage = new CalcPage();

    beforeEach(() => {
    browser.get(calcPage.path);
    })

    it('Quando eu quero somar valores', () => {
        calcPage.with(40, 2, '');
        expect(calcPage.result.getText()).toEqual('42');
    });

    it('Quando eu quero subtrair valores', () => {
        calcPage.with(40, 2, '-');
        expect(calcPage.result.getText()).toEqual('38');
    });

    it('Quando eu quero multiplicar valores', () => {
        calcPage.with(40, 2, '*');
        expect(calcPage.result.getText()).toEqual('80');
    });

    xit('Quando eu quero dividir valores', () => {
        calcPage.with(40, 2, '/');
        expect(calcPage.result.getText()).toEqual('20');
    });
})