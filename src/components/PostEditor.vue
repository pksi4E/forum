<script>
export default {
  name: 'PostEditor',
  emits: ['savePost'],
  data () {
    return {
      postText: ''
    }
  },
  methods: {
    save () {
      const postId = 'abcd' + Math.random()
      const post = {
        publishedAt: Math.floor(Date.now() / 1000), // msec converted to sec
        text: this.postText,
        userId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3",
        id: postId
        // threadId
      }
      this.$emit('savePost', { post })
      this.postText = ''
    }
  }
}
</script>

<template>
  <div class="thread-view-add-post">
      <form action="" @submit.prevent="save">
        <div class="add-post-text">
          <textarea
            v-model="postText"
            name="" id="" cols="30" rows="10" class=""></textarea>
        </div>
        <div class="add-post-submit">
          <button>Submit post</button>
        </div>
      </form>
    </div>
</template>

<style></style>