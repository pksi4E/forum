<script>
// import { reactive } from 'vue'
import sourceData from '@/data.json'

// const thread = reactive(sourceData.thread)
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    }
  },
  methods: {
    postById (id) {
      return this.posts.find(p => p.id === id)
    },
    userById (id) {
      return this.users.find(u => u.id === id)
    }
  },
  computed: {
    thread () {
      return this.threads.find(t => t.id === this.id)
    }
  }
}
</script>

<template>
  <div class="thread-view" v-if="thread">
    <h1>{{ thread.title }}</h1>
    <div
      v-for="postId in thread.posts"
      :key="postId"
      class="posts-list"
    >
      <div class="post">
        <div class="user-info">
          <a href="#" class="user-name">
            {{ userById(postById(postId).userId).name }}
          </a>
          <a href="#" class="">
            <img
              :src="userById(postById(postId).userId).avatar"
              class="avatar-large"
              alt="">
          </a>
        </div>
        <div class="post-content">
          <p>
            {{ postById(postId).text }}
          </p>
        </div>
        <div class="post-date">
          {{ postById(postId).publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thread-view {
  background-color: white;
  padding: 5%;
  border: 3px palevioletred solid;
}
.posts-list {
  padding: 5%;
  background-color: lightgreen;
  border: 5px green solid;
  /* margin-top: 10%; */
}
.post {
  width: 75%;
  height: auto;
  background-color: lightseagreen;
  margin: 25px;
  border: 2px black solid;
  display: flex;
  border-radius: 1.5em;
}

.post .user-info {
  display: inherit;
  flex-direction: column;
}

.post .post-content {
  display: inherit;
  text-align: left;
  padding-left: 5%;
  font-size: 18px;
}
</style>