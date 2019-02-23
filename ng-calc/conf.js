exports.config = {
    // Conect direto
    directConnect: true,

    // framework usado
    framework: 'jasmine2',

    // Onde pegar arquivo para rodar
    specs: ['specs/calc-spec.js'],

    onPrepare: () => {
        browser.driver.manage().window().maximize();
    },
    capabilities: {
        // browser usado
        'browserName': 'chrome'
    }
}