<?php

namespace Tests;

use Facebook\WebDriver\Firefox\FirefoxOptions;
use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Laravel\Dusk\TestCase as BaseTestCase;

abstract class DuskTestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Prepare for Dusk test execution.
     *
     * @beforeClass
     */
    public static function prepare(): void
    {
        if($_ENV['CI_ENABLED'] === true) return;

        if (! static::runningInSail()) {
            static::startChromeDriver();
        }
    }

    /**
     * Create the RemoteWebDriver instance.
     */
    protected function driver(): RemoteWebDriver
    {
        return match ($_ENV['BROWSER_TEST']){
            'firefox' => $this->startFirefoxBrowser(),
            'chrome' => $this->startChromeBrowser(),
            'edge' => $this->startEdgeBrowser(),
            'safari' => $this->startSafariBrowser()
        };
    }

    protected function startFirefoxBrowser(): RemoteWebDriver
    {
        $options = (new FirefoxOptions())->addArguments(collect([
            '--headless'
        ])->all());

        return RemoteWebDriver::create(
            $_ENV['SELENIUM_URL'],
            DesiredCapabilities::firefox()->setCapability(FirefoxOptions::CAPABILITY, $options)
        );
    }

    protected function startChromeBrowser(): RemoteWebDriver
    {
        $options = (new ChromeOptions())->addArguments(collect([
            '--headless',
            '--window-size=1920,1080',
            '--disable-gpu'
        ])->all());

        return RemoteWebDriver::create(
            $_ENV['SELENIUM_URL'],
            DesiredCapabilities::chrome()->setCapability(
                ChromeOptions::CAPABILITY, $options
            )
        );
    }

    protected function startEdgeBrowser(): RemoteWebDriver
    {
        return RemoteWebDriver::create(
            $_ENV['SELENIUM_URL'],
            DesiredCapabilities::microsoftEdge()
        );
    }

    protected function startSafariBrowser(): RemoteWebDriver
    {
        return RemoteWebDriver::create(
            $_ENV['SELENIUM_URL'],
            DesiredCapabilities::safari()
        );
    }

}
