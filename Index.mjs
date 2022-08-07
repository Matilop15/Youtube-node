const puppeteer = require('puppeteer');
const download = require('./Download.js');

export async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.youtube.com/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D")
    //await page.screenshot({ path: "viewpage.png" });
    //await page.screenshot({ path: "fullpage.png", fullPage: true}); full page capture
    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("#thumbnail")).map(x => x.href)
    })
    let urls = Object.values(names);
    function delay(n) {
        return new Promise(function (resolve) {
            setTimeout(resolve, n * 1000);
        });
    }
    for (let i = 2; i < urls.length; i++) {
        if (i != 2) await delay(30);
        const url_video = urls[i];
        console.log(url_video);
        download(url_video);

    }
    await browser.close()
}


start()