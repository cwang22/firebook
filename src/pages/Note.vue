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
import firebaseService from '../services/firebase'
import markdownIt from 'markdown-it'

const noteTemplate = {
  title: '',
  content: ''
}

export default {
  name: 'note',
  data () {
    return {
      note: {},
      md: markdownIt()
    }
  },
  computed: {
    current () {
      let key = this.$route.params.key
      return this.$store.state.notes[key]
    }
  },
  created () {
    this.note = Object.assign({}, noteTemplate, this.current)
  },
  watch: {
    current: function () {
      this.note = Object.assign({}, noteTemplate, this.current)
    }
  },
  methods: {
    render (source) {
      return this.md.render(source.toString())
    },
    save () {
      firebaseService.update(this.note)
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
