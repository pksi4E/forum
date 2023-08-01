<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'

export default {
  name: "CategoryList",
  components: { ForumList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      categories: sourceData.categories,
      forums: sourceData.forums,
    }
  },
  computed: {
    category () {
      return this.categories.find(cat => cat.id === this.id)
    },
    categoryForums () {
      return this.forums.filter(forum => forum.categoryId === this.id)
    }
  }
}
</script>

<template>
  <div class="category-list-container">
    <h2 class="category-title">
      <router-link
        :to="{ name: 'categories', params: { id: this.id } }"
      >
        {{ category.name }}
      </router-link>
    </h2>
    <forum-list :forums="categoryForums"/>
  </div>
</template>

<style></style>