exports.config = {
    // Conect direto
    directConnect: true,

    // framework usado
    framework: 'jasmine2',

    // Onde pegar arquivo para rodar
        //specs: ['specs/calc-spec.js'],
    specs: ['specs/login-spec.js'],

    // Url base
        //baseUrl: 'https://juliemr.github.io',
    baseUrl: 'https://mark7.herokuapp.com',

    onPrepare: () => {
        browser.driver.manage().window().maximize();
    //---------------------------Mark7--------
        //ignorar sinc com angular - mvc
        browser.manage().timeouts().implicitlyWait(10000);
        browser.ignoreSynchronization = true;
    // ----------------------------------------

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec:{
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true,
                displaySuccessful: true
            },
            summary:{
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true,
                displaySuccessful: true
            },
            colors:{
                enabled: true
            }
        }));
        var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new JasmineHtmlReporter({
            savePath: 'reports',
            screemShotsFolder: './shots',
            takeScreenShot: true,
            CleanDestination: true,
            fixedScreenshotName: true
        }))

    },
    capabilities: {
        // browser usado
        'browserName': 'chrome'
    }
}