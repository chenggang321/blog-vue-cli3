<template>
  <div id="app">
    <loading v-if="loading" />
    <router-view />
  </div>
</template>

<script>
import Loading from '@/components/loading/loading'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    ...mapGetters(['loading'])
  }
}
</script>

<style></style>
