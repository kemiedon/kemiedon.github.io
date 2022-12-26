const app = {
    data() {
        return {
            city: '',
            district: '',
            num: 30,
            tempture: '',
            main_icon: '',
            week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            week_tempture: {},
            icons: ['https://i.imgur.com/Shrg84B.png']
        }
    },
    mounted() {
        const cors = 'https://cors-anywhere.herokuapp.com/';
        axios
            .get(cors + 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-A13D4A9A-CCDC-492F-B370-A3E7289AE3C7&locationName=%E4%B8%AD%E6%AD%A3%E5%8D%80&elementName=T')
            .then(function(res) {
                console.log(res.data.records);
                this.city = res.data.records.locations[0].locationsName;
                this.district = res.data.records.locations[0].location[0].locationName;
                this.tempture = res.data.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176;";
                this.main_icon = (parseInt(this.tempture) > 18) ? 'https://i.imgur.com/Shrg84B.png' : 'https://i.imgur.com/BeWfUuG.png';
                $('#city_name').html(this.city);
                $('#district').html(this.district);
                $('#tempture').html(this.tempture);
                this.week_tempture = res.data.records.locations[0].location[0].weatherElement[0].time;

                console.log(this.week_tempture);
            })
            .catch(function(error) { // 请求失败处理
                console.log(error);
            });
    }
}
Vue.createApp(app).mount('#app');