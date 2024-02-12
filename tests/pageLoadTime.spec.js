const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { waitForDebugger } = require('inspector');
const { timeout } = require('../playwright.config');


test.skip('PageLoadTimeOut Demo', async ({page}) => {
  
        //test.setTimeout(60000)
        //test.slow() 
        
        await page.goto("https://learn-automation.com/")

});

test.skip('PageLoadTimeOut Demo2', async ({page}) => {

        await page.goto("https://freelance-learn-automation.vercel.app/login")

        await page.locator("//input[@id='email2']").fill("admin@gmail.com")

      //  await page.locator("//input[@id='password1']").fill("admin")

       // await page.locator("//button[normalize-space()='Sign in']").click()

       // const msg=await page.locator(".errorMessage").textContent()

       // expect(msg).toContain("USER Email Doesn't Exist")

        //expect(page.title()).toContain("playwright")

});

test('PageLoadTimeOut Demo3', async ({page}) => {

        await page.goto("https://seleniumpractise.blogspot.com/2016/08/how-to-use-explicit-wait-in-selenium.html")

        await page.getByText("Click me to start timer").click()

        const element=page.locator("//p[text()='WebDriver']",{timeout:20000})

        await element.waitFor({timeout:20000})

        expect(await element.textContent()).toContain("WebDriver")
});