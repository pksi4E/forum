<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'

export default {
  name: 'PageThreadShow',
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  components: {
    PostList
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts
    }
  },
  computed: {
    thread () {
      return this.threads.find(t => t.id === this.id)
    },
    threadPosts () {
      return this.posts.filter(p => p.threadId === this.id)
    }
  }
}
</script>

<template>
  <div v-if="thread" class="thread-view">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts"/>
  </div>
</template>

<style scoped>
.thread-view {
  background-color: white;
  padding: 5%;
  border: 3px palevioletred solid;
}

.thread-view h1 {
  color: blue;
}
</style>