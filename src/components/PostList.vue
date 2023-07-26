<script>
import PostListElement from '@/components/PostListElement.vue'

export default {
  name: 'PostList',
  components: { PostListElement },
  props: {
    posts: {
      type: Array,
      required: true
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
      <post-list-element :post="post"/>
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
</style>