$(function() {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    $.ajax({
        type: "GET",
        url: cors + "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-A13D4A9A-CCDC-492F-B370-A3E7289AE3C7&locationName=%E4%B8%AD%E6%AD%A3%E5%8D%80&elementName=T",
        dataType: 'json',
        success: res => {
            console.log(res.records)
            $('#city_name').html(res.records.locations[0].locationsName);
            $('#district').html(res.records.locations[0].location[0].locationName);
            $('#tempture').html(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176;");
        }
    });
});