const { test, expect } = require('@playwright/test');
const { chromium, playwright } = require('playwright')

const capability = {
	"browserName": "Chrome",
	"browserVersion": "122.0",
	"LT:Options": {
    "user": "mukeshotwani.50",
    "accessKey": "po9WNsa4fyaDoDaO78fMXMiWr6wlnoXZZllgq3frmg2eJzeVz4",
		"video": true,
		"platform": "Windows 10",
		"tunnel": false,
		"console": true,
    'build': 'Playwright Sample Build',
    'name': 'Playwright Sample Test',
    "network": true,
    "geoLocation": "US",
	}
}

test('has title', async () => 
{
  const browser=await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  })
  const page = await browser.newPage()

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
