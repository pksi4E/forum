<script>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'
export default {
  components: { ThreadList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {

    }
  },
  computed: {
    forum () {
      return sourceData.forums.find(forum => forum.id === this.id)
    },
    threads () {
      return sourceData.threads.filter(thread => thread.forumId === this.id)
    }
  }
}
</script>

<template>
  <div class="forum">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p>{{ forum.description }}</p>
      </div>
      <a href="#" class="button">Start a thread</a>
    </div>
  </div>
  <div class="thread-list">
    <thread-list :threads="threads"/>
  </div>
</template>

<style></style>