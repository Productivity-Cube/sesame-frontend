<template>
  <div class="doors">
    <NavBar/>
    <EditConfiguration/>
  </div>
</template>

<script>
// @ is an alias to /src
import EditConfiguration from '@/components/EditConfiguration.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Config',
  components: {
    EditConfiguration,
    NavBar
  }
}
</script>

