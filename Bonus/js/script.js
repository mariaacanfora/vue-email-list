Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        newMail: "",
        mailList: [],
        totalEmails: 0,
    },
    methods: {
        generateMultipleMails(){
            this.mailList = []
            this.totalEmails = 0
            for (let i = 0; i < 10; i++) {
                
                axios.get(this.apiUrl).then((responseServer)=>{
                    this.totalEmails++
                    let email =  responseServer.data.response;
                    this.mailList.push(email)
                })
            }


        } 
    },

})