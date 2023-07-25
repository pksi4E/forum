<script>
import sourceData from '@/data.json'

export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      users: sourceData.users
    }
  },
  methods: {
    userById (id) {
      return this.users.find(u => u.id === id)
    }
  }
}
</script>

<template>
  <div class="post-list">
    <div
      v-for="post in posts"
      :key="post.id"
      class="post"
    >
      <div class="user-info">
        <a href="#" class="user-name">
          {{ userById(post.userId).name }}
        </a>
        <a href="#" class="">
          <img
            :src="userById(post.userId).avatar"
            class="avatar-large"
            alt=""
          >
        </a>
        <p class="">
          51 postów
        </p>
      </div>
      <div class="post-content">
        <p>
          {{ post.text }}
        </p>
      </div>
      <div class="post-date">
        {{ post.publishedAt }}
      </div>
    </div>
  </div>
</template>

<style scoped>
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