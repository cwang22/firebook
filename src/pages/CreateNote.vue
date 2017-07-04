<template>
  <editor :note="note" :isEdit="false"></editor>
</template>
<script>
import Editor from '../components/Editor'

export default {
  name: 'note',
  components: { Editor },
  data () {
    return {
      note: {
        title: '',
        content: ''
      }
    }
  }
}
</script>
