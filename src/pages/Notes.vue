<template>
  <div>
    <h1 class="title">Notes</h1>
    <a class="button is-primary" @click="create">New</a>
    <div class="columns">
      <div class="column is-3" v-for="(note, key) in notes" v-bind:key="key">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">{{ note.title }}</p>
          </header>
          <div class="card-content content" v-html="markdown(note.content)"></div>
          <div class="card-footer">
            <a class="card-footer-item" @click="edit(key)">Edit</a>
            <a class="card-footer-item is-danger" @click="destroy(key)">Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebaseService from '../services/firebase'
import markdown from '../services/markdown'

export default {
  name: 'notes',
  computed: {
    notes() {
      return this.$store.state.notes
    }
  },
  methods: {
    create() {
      this.$router.push(`notes/create`)
    },
    edit(key) {
      this.$router.push(`notes/${key}`)
    },
    destroy(key) {
      firebaseService.destroy(key)
    },
    markdown(source) {
      return markdown.render(source)
    }
  }
}
</script>
<style scoped>
.button {
  margin: 20px 0;
}
.is-danger {
  color: #ff3860;
}
.is-danger:hover {
  color: #363636;
}
</style>
