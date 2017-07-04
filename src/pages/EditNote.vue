<template>
  <editor :note="note" :isEdit="true"></editor>
</template>
<script>
import Editor from '../components/Editor'

const noteTemplate = {
  title: '',
  content: ''
}

export default {
  name: 'note',
  components: {
    Editor
  },
  data () {
    return {
      note: {}
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
  }
}
</script>
