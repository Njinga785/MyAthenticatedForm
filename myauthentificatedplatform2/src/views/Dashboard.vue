<template>
    <div>
  <b-jumbotron>
    <template v-slot:header>This is Dashboard</template>

    <hr class="my-4">

    <p>
      Welcome to you connected User 
    </p>  

    <hr class="my-4">
     <b-button @click="logout" variant="danger">Sign-out</b-button>

    
  </b-jumbotron>
</div>
</template> 
<script>
export default {
    name: 'Dashboard', 
    methods: {
      logout() {
        this.$store.dispatch('retirer')
        this.$router.push('/')
      }
    }
}
</script>