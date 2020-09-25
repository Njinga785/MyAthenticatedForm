<template>
   <div>
  
  <b-tabs content-class="mt-3">
    <b-tab title="sign-up"><SignUpForm/></b-tab>
    <b-tab title="sign-in"><SignInForm/></b-tab><hr class="my-4">
    
  </b-tabs>
</div>

</template> 
<script> 
import SignUpForm from './SignUpForm.vue' 
import SignInForm from './SignInForm.vue'
export default {
    name: 'FormHandler', 
    components: {
        SignUpForm, 
        SignInForm
    }
}
</script>