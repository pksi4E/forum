<script>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'
export default {
  components: {
    ThreadList
  },
  data () {
    return {
      threads: sourceData.threads,
    }
  }
}
</script>

<template>
  <h1>Forum</h1>
  <thread-list v-bind:threads="threads" />
</template>

<style scoped>
</style>
