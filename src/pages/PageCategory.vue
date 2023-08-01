<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'
import CategoryList from '@/components/CategoryList.vue'
export default {
  components: { ForumList, CategoryList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<template>
  <div class="category-container">
    <category-list :id="id"/>
  </div>
</template>

<style></style>