const ytdl = require('ytdl-core');
const fs = require('fs')

let url = "https://www.youtube.com/watch?v=JEdDaalYx0s";

return new Promise(async (resolve, reject) => {
    const video = ytdl(url, {
        filter: function (format) {
            return format.quality == "hd1080";
        }
    });



    const info = await ytdl.getBasicInfo(url);
    const title = info.videoDetails.title
    const file = `./${title}.mp4`;
    video.pipe(fs.createWriteStream(`${file}`));
});
