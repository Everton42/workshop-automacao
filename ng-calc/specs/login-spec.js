const LoginPage = require('../pages/login-page')

describe('Quando quero acessar minha conta', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
    browser.get(loginPage.path);
    })

    it('Quando errar meu email', () => {
        loginPage.with('eveon@email.com', '123Aa321');
        expect(loginPage.errorMessage.getText()).toEqual('Usuário não cadastrado.');
    });

    it('Quando a senha nao atingir o minino de caracteres', () => {
        loginPage.with('eveon@email.com', '123');
        expect(loginPage.errorMessage.getText()).toEqual('Senha deve ter no mínimo 6 caracteres.');
    });

    it('Quando nao preencher os campos', () => {
        loginPage.with('', '');
        expect(loginPage.errorMessage.getText()).toEqual('Email incorreto ou ausente.');
    });

    it('Quando nao preencher os campos', () => {
        loginPage.with('everton@email.com', '');
        expect(loginPage.errorMessage.getText()).toEqual('Senha ausente.');
    });

    it('Quando nao preencher os campos', () => {
        loginPage.with('everton@email.com', '565444');
        expect(loginPage.errorMessage.getText()).toEqual('Senha inválida.');
    });

    xit('Quando repetir a senha errada', () => {
        for (let i; i < 6; i++){
            loginPage.with('everton@email.com', 'dsdsds');
            expect(loginPage.errorMessage.getText()).toEqual('Usuário bloqueado. Por favor aguarde 10 segundos, e tente novamente.');
        }
    });
})