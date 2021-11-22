const app = new Vue({
    el: '#app',
    
    data: {
        apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emails: [] ,
    },

     created() {
        this.getApiEmails();
    }, 

    methods: {
        getApiEmails() {
            for ( let i = 0; i < 10; i++ ) {
                
                axios.get(this.apiURL)
                .then(result => {
                      /* this.emails (array nel daya che conterrà le mie email) */
                        this.emails.push(result.data.response);   
                    })
                }
            }
         }
});



