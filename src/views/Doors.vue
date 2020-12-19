<template>
  <div class="eventList">
    <NavBar/>
    <DoorsList/>
  </div>
</template>

<script>
// @ is an alias to /src
import DoorsList from '@/components/DoorsList.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'doors',
  components: {
    DoorsList,
    NavBar
  }
}
</script>

