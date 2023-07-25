<script setup>
import sourceData from '@/data.json'
import { reactive, defineProps } from 'vue'

// const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)

// function postById (id) {
//   return posts.find(p => p.id === id)
// }
function userById (id) {
  return users.find(u => u.id === id)
}
// function userByPostId (postId) {
//   return users.find(u => u.id === this.findPostById(postId).userId)
// }
// // const name = 'page-home'
defineProps({
  threads: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="thread-list-container">
    <div class="thread-list">
      <h2 class="thread-list-title">Threads</h2>
      <!-- <div class="threads-list-info">
        <ul>
          <li>Tytuł</li>
          <li>Odpowiedzi</li>
          <li>Ostatni komentarz</li>
        </ul>
      </div> -->
      <div
        v-for="thread in threads"
        :key="thread.id"
        class="thread"
      >
        <div class="thread-content">
          <p class="thread-content-title">
            <router-link
              :to="{ name: 'thread-show', params: { id: thread.id } }"
            >
              {{ thread.title }}
            </router-link>
          </p>
          <p class="thread-content-user">
            Utworzył
            <router-link :to="{ name: 'home' }">
              {{ userById(thread.userId).name }}
            </router-link>,
            {{ thread.publishedAt }}.
          </p>
        </div>
        <div class="thread-replies-count">
          <p class="thread-replies-count-text">
            {{ thread.posts.length - 1 }}
            {{ thread.posts.length - 1 === 1 ? 'odpowiedź' : 'odpowiedzi'}}
          </p>
        </div>
        <div class="thread-activity">
          <img class="avatar-large" :src="userById(thread.userId).avatar" alt="">
          <div class="thread-activity-user">
            <p>
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p>{{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thread-list {
  background-color: white;
  padding: 5%;
  border: 3px palevioletred solid;
}
.thread-list-title {
  background-color: sandybrown;
  padding: .5em;
}
.thread {
  display: flex;
  justify-content: space-between;
}
.thread-content-title {
  text-align: left;
}
.thread-activity {
  display: flex;
  flex-direction: row;
}
</style>