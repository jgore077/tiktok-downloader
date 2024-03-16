
const readline = require('readline');
const { exit } = require("process");
const fs = require('fs');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Apply the stealth plugin to avoid being detected as a bot
puppeteer.use(StealthPlugin());

(async () => {
    const readline = require('node:readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
        
 
  const browser = await puppeteer.launch({ headless: false });

  // Open a new page
  const page = await browser.newPage();

  // Navigate to your desired URL
  await page.goto('https://www.tiktok.com');

  readline.question(`Press enter button to save your cookies\n`, async ()=> {
            readline.close();
            const cookies = await page.cookies();
            console.log(cookies)
            await fs.writeFileSync('./cookies.json', JSON.stringify(cookies, null, 2));
            exit()
        });
 
})();



