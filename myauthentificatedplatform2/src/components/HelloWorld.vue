<template>
  <div>
  <b-jumbotron>
    <template v-slot:header>Connexion Interface</template>

    <template v-slot:lead>
      Below the formulary for signUp or signIn in our magnificient application !
    </template>

    <hr class="my-4">
  <FormHandler></FormHandler>
    
  </b-jumbotron>
</div>
</template>

<script> 
import FormHandler from './FormHandler.vue'
export default {
  name: 'HelloWorld', 
  components: {
    FormHandler
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
