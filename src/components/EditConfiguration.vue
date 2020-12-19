<template>
  <mdb-container class="text-center grey-text" style="max-width: 500px">
    <br/>
    <br/>
    <h4 class="h4 pt-2">
      Edit Configuration
    </h4>
    <hr class="p-2 mx-5"/>
    <mdb-alert color="success" v-if="success" @closeAlert="success=false" dismiss>
      Successfully saved
    </mdb-alert>
    <form class="needs-validation" novalidate @submit="checkForm">
      <mdb-input bg label="maxClients" id="maxClients"
                 v-model="maxClients"
                 :customValidation="validation.maxClients.validated"
                 :isValid="validation.maxClients.valid"
                 :invalidFeedback="validation.maxClients.invalidFeedback"
                 required/>
      <mdb-btn class="px-5" block color="grey" type="submit">Save</mdb-btn>
    </form>
  </mdb-container>
</template>

<script>
import {
  mdbBtn,
  mdbContainer, mdbInput, mdbAlert,
} from "mdbvue";
import client from '../client/client'

export default {
  name: "EditConfiguration",
  components: {
    mdbContainer,
    mdbInput,
    mdbBtn,
    mdbAlert,
  },
  created () {
    client.get('clients/number/max').then(response => {
      this.maxClients = response.data.max
    })
  },
  data () {
    return {
      maxClients: 0,
      success: false,
      validation: {
        maxClients: {
          valid: false,
          validated: false
        },
      }
    }
  },
  methods: {
    checkForm(event) {
      this.success = false
      event.preventDefault()
      client.put('clients/number/max', {
        max: parseInt(this.maxClients)
      }).then(() => {
        this.success = true
      }).catch(error => {
        this.validation['maxClients'].valid = false
        this.validation['maxClients'].validated = true
        this.validation['maxClients'].invalidFeedback = Object.values(error.response.data.errors[0].constraints).join(", ")
      })
    }
  }
};
</script>
