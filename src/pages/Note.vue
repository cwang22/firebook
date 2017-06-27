<template>
  <div class="columns">
    <div class="control is-gapless column">
      <textarea class="textarea" v-model="note.content"></textarea>
      <div class="field">
        <a class="button is-primary" @click="save">Save</a>
        <a class="button" @click="cancel">Cancel</a>
      </div>
    </div>
    <div class="is-gapless column content" v-html="render(note.content)"></div>
  </div>
</template>
<script>
import firebase from 'firebase'
import markdownIt from 'markdown-it'
export default {
  name: 'note',
  data () {
    return {
      note: null,
      md: markdownIt()
    }
  },
  created () {
    this.fetch()
  },
  computed: {
    ref () {
      let user = firebase.auth().currentUser
      let key = this.$route.params.key
      return `users/${user.uid}/notes/${key}`
    }
  },
  methods: {
    render (source) {
      return this.md.render(source.toString())
    },
    fetch () {
      firebase.database().ref(this.ref).on('value', (snapshot) => {
        this.note = snapshot.val()
      })
    },
    save () {
      firebase.database().ref(this.ref).set(this.note)
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
