<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Doors</strong></h4>
    </mdb-row>
    <hr/>
    <mdb-btn color="grey" v-on:click="openAddDoors">Add new doors</mdb-btn>
    <hr/>
    <mdb-row class="text-left">
      <mdb-col sm="12" style="margin: auto">
        <mdb-tbl>
          <mdb-tbl-head>
            <tr>
              <th>Name</th>
              <th>Open At</th>
              <th>Close At</th>
              <th></th>
            </tr>
          </mdb-tbl-head>
          <mdb-tbl-body>
            <tr v-for="door in doors" :key="door.uuid">
              <td>{{ door.name }}</td>
              <td>{{ door.openAt }}</td>
              <td>{{ door.closeAt }}</td>
              <td>
                <mdb-btn color="grey" size="sm" v-on:click="edit(door.uuid)" >Edit</mdb-btn>
              </td>
            </tr>
          </mdb-tbl-body>
        </mdb-tbl>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
  import {mdbContainer, mdbRow, mdbCol, mdbTbl, mdbTblHead, mdbTblBody, mdbBtn } from "mdbvue"
  import client from '../client/client'

  export default {
    name: 'DoorsList',
    components: {
      mdbContainer,
      mdbRow,
      mdbBtn,
      mdbCol,
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
    },
    data: function () {
      return {
        date: new Date(),
        doors: [],
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
        client.get('doors').then(response => {
          this.doors = response.data
        })
      }
    }
  }
</script>
