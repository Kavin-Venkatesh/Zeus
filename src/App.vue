<template>
  <Loading v-if="isLoading" />
  <router-view v-else />
</template>

<script>
import { inject } from 'vue';
import Loading from './components/loading/AppLoading.vue';

export default {
  name: 'App',
  components: {
    Loading
  },
  setup() {
    const isLoading = inject('isLoading');
    return { isLoading };
  }
}
</script>

<style>
</style>
