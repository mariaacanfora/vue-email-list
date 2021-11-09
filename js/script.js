Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        newMail: "",
        mailList: [],
    },
    methods: {
        generateMultipleMails(){
            
            for (let i = 0; i < 10; i++) {
                this.mailList = []
                axios.get(this.apiUrl).then((responseServer)=>{
                    
                    let email =  responseServer.data.response;
                    this.mailList.push(email)
                })
            }


        } 
    },

})