<template>
  <div class="columns">
    <div class="control is-gapless column">
      <div class="field">
        <label class="label">Title</label>
        <p class="control">
          <input v-model="note.title" class="input">
        </p>
      </div>
      <div class="field">
      <label class="label">Content</label>
        <p class="control">
          <textarea class="textarea" v-model="note.content"></textarea>
        </p>
      </div>
      <div class="field">
        <a class="button is-primary" @click="create">Submit</a>
        <a class="button" @click="cancel">Cancel</a>
      </div>
    </div>
    <div class="is-gapless column content" v-html="render(note.content)"></div>
  </div>
</template>
<script>
import firebaseService from '../services/firebase'
import markdownIt from 'markdown-it'

export default {
  name: 'note',
  data () {
    return {
      note: {
        title: '',
        content: ''
      },
      md: markdownIt()
    }
  },
  methods: {
    render (source) {
      return this.md.render(source.toString())
    },
    create () {
      firebaseService.create(this.note)
    },
    cancel () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  .textarea {
    height: 600px;
  }
  .field {
    margin-top: 1.75rem;
  }
</style>
