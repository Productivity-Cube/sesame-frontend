<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Hey {{ $route.params.name }}</strong></h4>
    </mdb-row>
    <hr/>
    <mdb-row class="mt-5 pt-5 mx-3">
      <mdb-col class="sm-1">
        <h4>Date</h4>
        <datepicker v-on:selected="selectDate" style="border: 1px solid #ced4da;border-radius: .25rem;padding: .375rem 1.75rem .375rem .75rem;" :value="date"></datepicker>
      </mdb-col>
    </mdb-row>
    <mdb-row class="text-center">
      <mdb-col sm="12" style="margin: auto">
        <mdb-tbl>
          <mdb-tbl-head>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Date</th>
            </tr>
          </mdb-tbl-head>
          <mdb-tbl-body>
            <tr v-for="event in events" :key="event.uuid">
              <td>{{ event.name }}</td>
              <td>{{ event.value }}</td>
              <td>{{ event.createdAt | moment("L HH:mm") }}</td>
            </tr>
          </mdb-tbl-body>
        </mdb-tbl>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
  import {mdbContainer, mdbRow, mdbCol, mdbTbl, mdbTblHead, mdbTblBody} from "mdbvue"
  import Datepicker from 'vuejs-datepicker';
  import axios from 'axios'
  import querystring from 'querystring'
  import VueCookies from 'vue-cookies'

  export default {
    name: 'EventList',
    components: {
      Datepicker,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
    },
    data: function () {
      return {
        date: new Date(),
        events: [],
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
      selectDate(date) {
        this.date = new Date(date)
        this.refresh()
      },
      refresh() {
        let url = `${process.env.VUE_APP_API_URL}/events`
        let params = {
          // dateFrom: dateFrom,
          // dateTo: dateTo,
        }

        const token = VueCookies.get('accessToken')
        console.log('TOKEN', token)
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        axios.get(`${url}?${querystring.stringify(params)}`, config)
          .then(response => {
            console.log(response.data)
            this.events = response.data
          })
      }
    }
  }
</script>
