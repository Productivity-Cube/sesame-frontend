<template>
  <mdb-container class="text-center grey-text" style="max-width: 500px">
    <br/>
    <br/>
    <h4 class="h4 pt-2">
      Edit doors
    </h4>
    <hr class="p-2 mx-5"/>
    <FormDoors
        :uuid=$route.params.uuid
    />
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
} from "mdbvue";
import FormDoors from '@/components/doors/Form.vue'

export default {
  name: "EditDoorsComponent",
  components: {
    mdbContainer,
    FormDoors
  }
};
</script>
