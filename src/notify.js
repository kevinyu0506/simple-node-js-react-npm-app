const axios = require('axios');
const qs = require('qs');

if (process.argv.length !== 6) {
    console.log("Usage: node notify.js <token> <description> $JOB_NAME $BUILD_URL");
    throw "stop execution";
}

const token = process.argv[2]
const data = { 'message': `${process.argv[3]}\nJob: ${process.argv[4]}\nUrl: ${process.argv[5]}` };

axios({
    method: 'post',
    url: 'https://notify-api.line.me/api/notify',
    data: qs.stringify(data),
    headers: {
        'Authorization': `Bearer ${token}`,
        'content-type': 'application/x-www-form-urlencoded'
    }
}).then(function(res) {
    console.log(res);
}).catch(function(err) {
    console.log(err);
});