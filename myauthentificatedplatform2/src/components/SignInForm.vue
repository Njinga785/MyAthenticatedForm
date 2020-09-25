<template>
   <div>
    <b-form>
      

      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" v-model="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          
          required
          placeholder="Enter your secret password"
        ></b-form-input>
      </b-form-group>

      

      <b-button @click="regisUser" variant="primary">Sign-In</b-button>
      
    </b-form>
    
  </div> 
</template> 
<script> 
import axios from 'axios'
export default {
    name: 'SignInForm',
    data() {
        return {
            email: '', 
            password:''
        }
    }, 
    methods: {
        regisUser() { 
          
            axios.post(`http://localhost:3000/sign-in`, {
                email: this.email, 
                password: this.password
            }) 
            .then((response) => {  
              console.log(response);
              this.$store.dispatch('ajouter', response.data.token)
             
              this.$router.push('/dashboard')
                // if (response){
                //   this.$router.push('/dashboard')
                // }else{
                //   console.log('can not sign-in')
                // }
            })
        }
    }
}
</script>