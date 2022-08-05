const puppeteer = require("puppeteer")
const { download } = require('./prueba')

async function start() {
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

    // for (let i = 1; i < urls.length/3; i++) {
    //     if (i != 1) await delay(30);
    //     console.log('primer for' + i);

    //     const url_video = urls[i];
    //     console.log(url_video);
    //     download(url_video);

    // }
    // for (let i = 11; i < ((urls.length/3) * 2); i++) {
    //     await delay(30);
    //     console.log('segnunod' + i);
    //     const url_video = urls[i];
    //     console.log(url_video);
    //     download(url_video);


    // }
    // for (let i = 21; i < urls.length; i++) {
    //     await delay(30);
    //     console.log('tercero ' + i);
    //     const url_video = urls[i];
    //     console.log(url_video);
    //     download(url_video);


    // }
    const url_video = 'https://www.youtube.com/watch?v=JEdDaalYx0s&ab_channel=ElAlfaElJefeTV';
    console.log(url_video);
    download(url_video);
    
    await browser.close()
}


start()