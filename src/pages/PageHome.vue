<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'
export default {
  components: {
    ForumList
  },
  data () {
    return {
      forums: sourceData.forums,
    }
  }
}
</script>

<template>
  <h1>Forum</h1>
  <forum-list :forums="forums" />
</template>

<style scoped>
</style>
