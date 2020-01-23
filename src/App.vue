<template>
  <div id="app">
    <router-view name="sidebar"/>
    <router-view />
  </div>
</template>

<script>
import Sidebar from './views/layouts/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
