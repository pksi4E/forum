<script>
import PostListItem from '@/components/PostListItem.vue'

export default {
  name: 'PostList',
  components: { PostListItem },
  props: {
    posts: {
      type: Object,
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
      <post-list-item :post="post"/>
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
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  background-color: honeydew;
  /* padding-top: 10px; */
  margin-top: 20px;
  border: 1.5px rgb(11, 123, 24) solid;
  border-radius: 1.25em;
  box-shadow: 7px 7px 10px rgb(171, 185, 177);
}
</style>