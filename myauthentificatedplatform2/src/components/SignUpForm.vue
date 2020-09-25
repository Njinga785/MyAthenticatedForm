<template>
  <div> 
    <b-form @submit.prevent="">
        <h3>{{message}}</h3>
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="name"
          type="text"
          required
          placeholder="Enter your name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Email address:" label-for="input-2">
        <b-form-input id="input-2" v-model="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="password"
          
          required
          placeholder="Enter your secret password"
        ></b-form-input>
      </b-form-group>

      <b-button @click="addUser()" type="submit" variant="primary">Sign-Up</b-button>
    </b-form>
  </div>
</template> 
<script> 
import axios from 'axios'
export default { 
    
  name: "SignUpForm", 
  data(){
      return{
          name: '', 
          email: '', 
          password:'', 
          message: ''
      }
  },

  methods: {
    addUser() {
        this.$on('submit', (e) => {
            e.target.prevent()
        })
        console.log(this.name,this.email,this.password );
      axios.post("http://localhost:3000/sign-up", {
          name: this.name,
          email: this.email,
          password: this.password, 
          
        })
        .then((response) => {
          console.log(response);
          this.$store.dispatch('ajouter', response.data.token)
          this.message = 'You have been regisred go Sign-in now !'
          this.name = '', 
          this.email = '', 
          this.password = ''
        }); 
        
    },
  },
};
</script>
<style >

</style>