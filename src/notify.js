const axios = require('axios');
const qs = require('qs');

const data = { 'message': process.argv.slice(2)[0] };

axios({
    method: 'post',
    url: 'https://notify-api.line.me/api/notify',
    data: qs.stringify(data),
    headers: {
        'Authorization': 'Bearer zgCGMfH7XzqIa0mDhiQ257siaP4PHxaV3xdbmH6dA4r',
        'content-type': 'application/x-www-form-urlencoded'
    }
}).then(function(response) {
    console.log(response);
}).catch(function(error) {
    console.log(error);
});