<script>
import sourceData from '@/data.json'

export default {
  name: 'PostListElement',
  props: {
    post: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      users: sourceData.users,
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
  <!-- the content of the post -->

  <div class="post-user-info">
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

</template>

<style scoped>

.post-user-info {
  /* display: inherit; */
  flex-direction: column;
  /* flex-basis: 100%; */
}

.post-content {
  /* display: inherit; */
  text-align: left;
  padding-left: 5%;
  font-size: 18px;
}

.post-date {
  flex-basis: 80%;
  justify-content: center;
  text-align: right;
}
</style>