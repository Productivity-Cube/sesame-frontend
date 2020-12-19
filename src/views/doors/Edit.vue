<template>
  <div class="doors">
    <NavBar/>
    <EditDoorsComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import EditDoorsComponent from '@/components/doors/Edit.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'EditDoors',
  components: {
    EditDoorsComponent,
    NavBar
  }
}
</script>

