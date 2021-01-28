<template>
  <form class="needs-validation" novalidate @submit="checkForm">
    <mdb-input bg label="Name" id="name"
               v-model="name"
               :customValidation="validation.name.validated"
               :isValid="validation.name.valid"
               :invalidFeedback="validation.name.invalidFeedback"

               required/>
    <mdb-input bg label="Open At" id="openAt"
               type="number"
               v-model="openAt"
               :customValidation="validation.openAt.validated"
               :isValid="validation.openAt.valid"
               :invalidFeedback="validation.openAt.invalidFeedback"
               required/>
    <mdb-input bg label="Close At" id="closeAt"
               type="number"
               v-model="closeAt"
               :customValidation="validation.closeAt.validated"
               :isValid="validation.closeAt.valid"
               :invalidFeedback="validation.closeAt.invalidFeedback"
               required/>
    <mdb-input bg label="IP" id="ip"
               v-model="ip"
               :customValidation="validation.ip.validated"
               :isValid="validation.ip.valid"
               :invalidFeedback="validation.ip.invalidFeedback"
               required/>

    <mdb-btn class="px-5" block color="grey" type="submit">Save</mdb-btn>
  </form>
</template>

<script>
import {
  mdbInput,
  mdbBtn,
} from "mdbvue";
import client from '../../client/client'

export default {
  name: "FormDoors",
  components: {
    mdbInput,
    mdbBtn,
  },
  props: {
    uuid: String,
  },
  data() {
    return {
      name: '',
      openAt: '',
      closeAt: '',
      ip: '',
      validation: {
        name: {
          valid: false,
          validated: false
        },
        openAt: {
          valid: false,
          validated: false
        },
        closeAt: {
          valid: false,
          validated: false
        },
        ip: {
          valid: false,
          validated: false
        },
      }
    }
  },
  created () {
    if (this.uuid != null) {
      client.get(`doors/${this.uuid}`).then(response => {
        this.name = response.data.name
        this.openAt = response.data.openAt
        this.closeAt = response.data.closeAt
        this.ip = response.data.ip
      })
    }

  },
  methods: {
    checkForm(event) {
      event.preventDefault()
      let method = 'post'
      let url = 'doors'
      if (this.uuid != null) {
        url += `/${this.uuid}`
        method = 'put'
      }
      client[method](url, this.$data).then(() => {
        window.location.href = '#/doors'
      }).catch(error => {
        if (error.response.data.errors) {
          event.target.classList.add('was-validated');
          error.response.data.errors.forEach(error => {
            this.validation[error.property].valid = false
            this.validation[error.property].validated = true
            this.validation[error.property].invalidFeedback = Object.values(error.constraints).join(", ")
          })
        }
      })
    }
  }
};
</script>
