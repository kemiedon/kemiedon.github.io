$(function() {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    $.ajax({
        type: "GET",
        url: cors + "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-A13D4A9A-CCDC-492F-B370-A3E7289AE3C7&elementName=T",
        dataType: 'json',
        success: res => {
            console.log(res.records.localtions[0].time)
        }
    });
});