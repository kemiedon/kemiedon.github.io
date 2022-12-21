$(function() {

    $.ajax({
        type: "GET",
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063",
        dataType: 'json',
        headers: {
            "Authorization": "CWB-A13D4A9A-CCDC-492F-B370-A3E7289AE3C7"
        },
        data: { elementName: "T" },
        success: function() {
            alert('Thanks for your comment!');
        }
    });
});