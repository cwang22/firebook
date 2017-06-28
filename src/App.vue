<template>
  <div id="app">
    <navbar></navbar>
    <div class="container" style="margin-top: 40px;">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>
<style>
  @import "../node_modules/bulma/css/bulma.css";
</style>

