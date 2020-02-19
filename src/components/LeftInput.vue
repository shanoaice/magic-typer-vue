<template>
  <textarea v-model="leftText" />
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    leftText: {
      get() {
        return this.$store.state.leftText
      },
      set(value) {
        this.setText(value)
      }
    }
  },
  methods: mapMutations({
    setText: 'setLeftText'
  })
}
</script>
