const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

require('nightwatch-cucumber')({
    cucumberArgs: [
        '--compiler', 'js:babel-core/register',
        '--require', 'e2e/step_definitions',
        'e2e',
    ],
});

module.exports = {
    output_folder: 'reports',
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path: '',
    globals_path: '',
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': chromedriver.path,
        },
    },
    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            screenshots: {
                enabled: false,
                path: '',
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless'],
                },
                acceptSslCerts: true,
            },
        },
    },
};
