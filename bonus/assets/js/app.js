const { createApp } = Vue

createApp({
    data() {
      return {
        mails: []
      }
    },
    methods: {
      apiCall(){
        for(let i = 0; i < 10; i++){
          axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response =>{
                   // console.log(response.data.response);
                this.mails.push(response.data.response);
                   // console.log(this.mails)
           })
         }
      },
    },
    mounted() {
      this.apiCall()
    },
  }).mount('#app')