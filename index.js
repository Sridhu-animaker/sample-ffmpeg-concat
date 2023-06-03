const http = require('node:http');
const fs = require('node:fs');
const concat = require('ffmpeg-concat');

const html = fs.readFileSync('./index.html', 'utf-8')
const server = http.createServer((req, res) => {
    res.end(html);
    if (req.url === '/convert') {
        console.log(`Conversion started.....`);
        concat({
            output: 'test.mp4',
            videos: [
                'input1.mp4',
                'input2.mp4',
            ],
            transitions: [
                {
                    name: 'squareswire',
                    duration: 3500
                },
            ]
        });
    }
});

server.listen(3000, () => {
    console.log('server running on port 3000')
})