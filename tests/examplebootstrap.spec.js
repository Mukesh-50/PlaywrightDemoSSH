// @ts-check
const { test, expect } = require('@playwright/test');
const { log } = require('console');

test('has title', async ({ page }) => {
  await page.goto('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html');

  const links=await page.$$("//ul[@class='dropdown-menu']//li//a") 

  await page.locator("button#menu1").click()

  for(const ele of links)
  {
    const text=await ele.textContent()

    if(text !== null && text !== undefined && text.includes("JavaScript"))
    {
      console.log("text is "+text)

      await ele.click()

      break
    }
    

  }

});

