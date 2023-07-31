<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export default {
  name: "AppDate",
  props: {
    timestamp: {
      type: Number,
      required: true
    }
  },
  computed: {
    relativeFriendlyDate () {
      return dayjs.unix(this.timestamp).fromNow()
    },
    longFriendlyDate () {
      return dayjs.unix(this.timestamp).format('lll')
    },
    dateInISOFormat () {
      return dayjs.unix(this.timestamp).format('YYYY-MM-DDTHH:mm:ss')
    }
  }
}
</script>

<template>
  <time :datetime="dateInISOFormat" :title="longFriendlyDate">
    {{ relativeFriendlyDate }}
  </time>
</template>

<style></style>