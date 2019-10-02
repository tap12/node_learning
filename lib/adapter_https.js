const https = require('http');

var url = 'http://api.nbp.pl/api/cenyzlota';

var getUrlAdapter = function (address) {
    var url = require('url');
    var urlProtocol = url.parse(address).protocol;

    if (urlProtocol === 'https:') {
        console.log('wykorzystuje modul HTTPS');
        return require('https');
    }

    console.log('wykorzystje modul HTTP');
    return require('http');
};

getUrlAdapter(url).get(url, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        console.log(data);
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});