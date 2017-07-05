<template>
  <div id="app">
    <navbar></navbar>
    <section class="section">
      <div class="container">
        <router-view></router-view>
    </div>
    </section>

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
  .section {
    padding: 3rem 1.5rem;
  }
</style>

