const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

const browsers = ['firefox', 'MicrosoftEdge', 'chrome'];
const gridUrl = 'http://localhost:4444/wd/hub';

async function signupTest(browser) {
  let driver;

  try {
//    // Start the test
    driver = await new Builder().usingServer(gridUrl).forBrowser(browser).build();

    // Step 1: Open the website
    await driver.get("http://localhost:3000/");

    // Step 2: Set window size
    await driver.manage().window().setRect({ width: 1440, height: 886 });

    // Step 3: Click on the button
    await driver.findElement(By.css(".button2")).click();

    // Step 4: Click on the span
    await driver.findElement(By.css(".span:nth-child(1)")).click();

    // Step 5: Click on the input field
    await driver.findElement(By.css(".inputForm:nth-child(2) > .input")).click();

    // Step 6: Type any new name
    await driver.findElement(By.css(".inputForm:nth-child(2) > .input")).sendKeys("Sreelakshmi");
    await driver.sleep(1000); // Wait for 1 second
    // Step 7: Click on the email input field
    await driver.findElement(By.css(".inputForm:nth-child(4) > .input")).click();

    // Step 8: Type the email
    await driver.findElement(By.css(".inputForm:nth-child(4) > .input")).sendKeys("sreelakshmithiruvoth@gmail.com");
    await driver.sleep(1000); // Wait for 1 second
    // Step 9: Click on the password input field
    await driver.findElement(By.css(".inputForm:nth-child(6) > .input")).click();

    // Step 10: Type the password
    await driver.findElement(By.css(".inputForm:nth-child(6) > .input")).sendKeys("sree@123");
    await driver.sleep(1000); // Wait for 1 second
    // Step 11: Click on the checkbox
    await driver.findElement(By.css(".flex-row input")).click();

    // Step 12: Click on the submit button
    await driver.findElement(By.css(".button-submit")).click();

  } catch (error) {
    console.error('Error during the signup test:', error);
  } finally {
    // Quit the driver
    if (driver) {
      await driver.quit();
    }
  }
}

(async function() {
  await Promise.all(browsers.map(browser => signupTest(browser)));
})();
