<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>{{ currentClientsNumber }} / {{ maxClientsNumber }}</strong></h4>
    </mdb-row>
    <hr/>
  </mdb-container>
</template>

<script>
import {mdbContainer, mdbRow } from "mdbvue"
import client from '../client/client'

export default {
  name: 'CurrentClients',
  components: {
    mdbContainer,
    mdbRow
  },
  data: function () {
    return {
      currentClientsNumber: 0,
      maxClientsNumber: 0
    }
  },
  watch: {
    date: function () {
      this.refresh()
    },
  },
  created() {
    this.refresh()
  },
  methods: {
    edit(uuid) {
      console.log(uuid)
      window.location.href = `#/doors/edit/${uuid}`
    },
    openAddDoors() {
      window.location.href = '#/doors/add'
    },
    refresh() {
      client.get('clients/number').then(response => {
        this.currentClientsNumber = response.data.currentClients
      })
      client.get('clients/number/max').then(response => {
        this.maxClientsNumber = response.data.max
      })
    }
  }
}
</script>
