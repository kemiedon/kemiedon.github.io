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
                console.log(res);
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