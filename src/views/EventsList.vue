<template>
  <div class="eventList">
    <NavBar/>
    <EventsList/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import EventsList from '@/components/EventsList.vue'
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'eventList',
    components: {
      EventsList,
      NavBar
    }
  }
</script>

