const cors = require('cors');
const corsOptions = {
    origin: 'https://kemiedon.github.io',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
$(function() {

    $.ajax({
        type: "GET",
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-A13D4A9A-CCDC-492F-B370-A3E7289AE3C7&elementName=T",
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': 'https://kemiedon.github.io'
        },
        success: res => {
            console.log(res)
        }
    });
});