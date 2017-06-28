<template>
  <div>
    <h1 class="title">Notes</h1>
    <a class="button is-primary" @click="create">New</a>
    <div class="columns">
      <div class="column is-3" v-for="(note, key) in notes">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">{{ note.title }}</p>
          </header>
          <div class="card-content content" v-html="render(note.content)"></div>
          <div class="card-footer">
            <a class="card-footer-item" @click="edit(key)">Edit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import markdownIt from 'markdown-it'

export default {
  name: 'notes',
  data () {
    return {
      md: markdownIt()
    }
  },
  computed: {
    notes () {
      return this.$store.state.notes
    }
  },
  methods: {
    render (source) {
      return this.md.render(source.toString())
    },
    edit (key) {
      this.$router.push(`notes/${key}`)
    },
    create () {

    }
  }
}
</script>
<style scoped>
  .button {
    margin: 20px 0;
  }
</style>
