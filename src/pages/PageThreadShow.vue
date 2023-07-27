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
      posts: sourceData.posts,
      newPostText: ''
    }
  },
  computed: {
    thread () {
      return this.threads.find(t => t.id === this.id)
    },
    threadPosts () {
      return this.posts.filter(p => p.threadId === this.id)
    }
  },
  methods: {
    addPost () {
      const postId = 'abcd' + Math.random()
      const post = {
        publishedAt: Math.floor(Date.now() / 1000), // msec converted to sec
        text: this.newPostText,
        threadId: this.id,
        userId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3",
        id: postId
      }
      // new post is added to posts table
      // new post's id is added to the thread's posts list
      this.posts.push(post)
      this.thread.posts.push(postId)

      this.newPostText = ''
    }
  }
}
</script>

<template>
  <div v-if="thread" class="thread-view">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts"/>

    <div class="thread-view-add-post">
      <form action="" @submit.prevent="addPost">
        <div class="add-post-text">
          <textarea
            v-model="newPostText"
            name="" id="" cols="30" rows="10" class=""></textarea>
        </div>
        <div class="add-post-submit">
          <button>Submit post</button>  
        </div>
      </form>
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
</style>