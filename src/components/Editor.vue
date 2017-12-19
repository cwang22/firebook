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
        <a class="button is-primary" @click="save">Save</a>
        <a class="button" @click="cancel">Cancel</a>
      </div>
    </div>
    <div class="is-gapless column">
      <h1 class="title" v-text="note.title"></h1>
      <div class="content" v-html="markdown(note.content)"></div>
    </div>
  </div>
</template>
<script>
import firebaseService from '../services/firebase'
import markdown from '../services/markdown'
export default {
  props: ['note', 'isEdit'],
  methods: {
    markdown(source) {
      return markdown.render(source)
    },
    save() {
      if (this.isEdit) firebaseService.update(this.note)
      else firebaseService.create(this.note)
      this.$router.push('/notes')
    },
    cancel() {
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
