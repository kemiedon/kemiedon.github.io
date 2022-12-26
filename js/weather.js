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
            const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let html1 = `<div class="d-flex flex-column block first-block">
            <small class="text-muted mb-0">`
            week[i] +
                let html2 = `</small><div class="text-center"><img class="symbol-img" src="`
            let html3 = `"></div><h6><strong>` + `</strong></h6></div>`

        }
    });



});
const app = {
    data() {
        return {
            city: '',
            district: '',
            num: 30,
            tempture: '',
            week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            week_tempture: []
        }
    },
    mounted() {
        const cors = 'https://cors-anywhere.herokuapp.com/';
        axios
            .get(cors + 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-A13D4A9A-CCDC-492F-B370-A3E7289AE3C7&locationName=%E4%B8%AD%E6%AD%A3%E5%8D%80&elementName=T')
            .then(function(res) {
                this.city = res.records.locations[0].locationsName;
                this.district = res.records.locations[0].location[0].locationName;
                this.tempture = res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176;";

                for (let i = 0; i < res.records.locations[0].location[0].weatherElement[0].time.length; i += 2) {
                    this.week_tempture.push(res.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value + "&#176;");
                }
                console.log(this.week_tempture);
            })
            .catch(function(error) { // 请求失败处理
                console.log(error);
            });
    }
}
Vue.createApp(app).mount('#app');