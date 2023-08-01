<script>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList.vue'
export default {
  components: {
    CategoryList
  },
  data () {
    return {
      categories: sourceData.categories,
    }
  }
}
</script>

<template>
  <h1>Forum</h1>
  <div v-for="category in categories" :key="category.id">
    <category-list :id="category.id"/>
  </div>
</template>

<style scoped>
</style>
