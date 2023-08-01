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
  <div class="forum-list">
    <h2 class="forum-list-title">
      <a href="#">Forums</a>
    </h2>
  </div>

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
</template>

<style></style>