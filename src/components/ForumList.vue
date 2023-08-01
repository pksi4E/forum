<script>
export default {
  props: {
    forums: {
      type: Object,
      required: true,
    }
  },
  methods: {
    forumThreadsWord (forum) {
      const countThreads = forum.threads?.length
      if (countThreads) {
        return countThreads == 1 ? 'wątek' : 'wątki'
      } else {
        return 'brak wątków'
      }
    }
  }
}
</script>

<template>
  <div class="forum-list-container">

    <div
      v-for="forum in forums"
      :key="forum.id"
      class="forum-listing"
    >
      <div class="forum-details">
        <router-link
          :to="{ name: 'forum', params: { id: forum.id } }"
          class="forum-name"
        >
          {{ forum.name }}
        </router-link>
        <p>{{ forum.description }}</p>
      </div>

      <div class="thread-count">
        <p>
          <span class="count">{{ forum.threads?.length }}</span>
          {{ forumThreadsWord(forum) }}
        </p>
      </div>

      <div class="last-thread"></div>

    </div>
  </div>
</template>

<style scoped>
.forum-list-container {
  background-color: oldlace;
  padding: 5%;
}
.forum-listing {
  display: flex;
  flex-direction: row;
  background-color: antiquewhite;
}
.forum-listing:nth-child(odd) {
  background-color: rgba(237, 195, 159, 0.515);
}
/* .forum-details {
  display: flex;
  flex-direction: row; */
/* } */
</style>