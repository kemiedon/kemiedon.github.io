$(function() {

    $.ajax({
        type: "GET",
        url: "https://json2jsonp.com/?url=https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063",
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Origin': 'http://clientdomain.dev'
        },
        data: { Authorization: "CWB-A13D4A9A-CCDC-492F-B370-A3E7289AE3C7", elementName: "T" },
        success: res => {
            console.log(res)
        }
    });
});