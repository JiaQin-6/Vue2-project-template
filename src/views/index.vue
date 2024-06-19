<template>
  <div>
    <div>123git</div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  mounted(){
    this.setIndex(12)
  },
  methods: {
    ...mapMutations(["setIndex"]),
  },
}
</script>

<style>

</style>