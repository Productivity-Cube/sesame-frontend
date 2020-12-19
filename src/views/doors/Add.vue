<template>
  <div class="doors">
    <NavBar/>
    <AddDoors/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddDoors from '@/components/doors/Add.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'doors',
  components: {
    AddDoors,
    NavBar
  }
}
</script>

