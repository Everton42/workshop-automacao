exports.config = {
    // Conect direto
    directConnect: true,

    // framework usado
    framework: 'jasmine2',

    // Onde pegar arquivo para rodar
    specs: ['test.js'],

    capabilities: {
        // browser usado
        'browserName': 'chrome'
    }
}