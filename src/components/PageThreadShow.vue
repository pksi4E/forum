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

    <div class="post-list">
      <div
        v-for="postId in thread.posts"
        :key="postId"
        class="post"
      >
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
          <p class="">
            51 postów
          </p>
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

.thread-view h1 {
  color: blue;
}

.post-list {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  /* border: 2.5px green solid; */
  /* margin-top: 10%; */
}

.post {
  display: flex;
  width: 100%;
  height: auto;
  background-color: honeydew;
  /* padding-top: 10px; */
  margin-top: 20px;
  border: 1.5px rgb(11, 123, 24) solid;
  border-radius: 1.5em;
  box-shadow: 7px 7px 10px rgb(168, 242, 195);
  /* flex-wrap: wrap; */
}

.post .user-info {
  /* display: inherit; */
  flex-direction: column;
  /* flex-basis: 100%; */
}

.post .post-content {
  /* display: inherit; */
  text-align: left;
  padding-left: 5%;
  font-size: 18px;
}

.post .post-date {
  flex-basis: 80%;
  justify-content: center;
  text-align: right;
}
</style>