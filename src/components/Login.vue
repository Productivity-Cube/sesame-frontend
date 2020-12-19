<template>
  <mdb-container>
    <mdb-row class="text-center">
      <mdb-col sm="6" style="margin: auto">
        <form v-on:submit="submitForm" action="#" method="post" novalidate="true">
          <mdb-input type="text" label="Login" v-model="login" />
          <mdb-input type="password" label="Password" v-model="password" />
          <div v-if="errors.length">
            Please enter login and password.
          </div>
          <mdb-btn type="submit">Login</mdb-btn>
        </form>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>

  let apiEndPoint = process.env.VUE_APP_API_URL + "/login";

  import {mdbBtn, mdbCol, mdbRow, mdbContainer, mdbInput} from "mdbvue";
  import axios from 'axios';
  import VueCookies from 'vue-cookies'

  export default {
    login: 'Login',
    components: {
      mdbCol,
      mdbInput,
      mdbContainer,
      mdbBtn,
      mdbRow
    },
    data: function () {
      return {
        errors: [],
        login: '',
        password: '',
        apiKey: "",
      }
    },
    methods: {
      submitForm: function (event) {
        event.preventDefault();
        this.errors = [];
        if (this.login.length < 4) {
          this.errors.push('Login required.')

          return;
        }
        if (this.password.length < 4) {
          this.errors.push('Password required.')

          return;
        }
        axios.post(apiEndPoint, {
          login: this.login,
          password: this.password,
        }).then(response => {
          console.log(response)
          VueCookies.set('accessToken' , response.data.accessToken, '2h')
          this.$router.push(`/events`)
          // eslint-disable-next-line no-unused-vars
        }, response => {});
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    font-weight: normal;
    padding-top: 20px;
    padding-bottom: 30px;
  }

  p {
    color: #969696;
    margin-bottom: 0;
    font-size: 14px;
  }
</style>
