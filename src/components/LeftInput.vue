<template>
  <textarea v-model="leftText" ></textarea>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: mapMutations({
    setText: 'setLeftText'
  }),
  computed: {
    leftText: {
      get() {
        return this.$store.state.leftText
      },
      set(val) {
        this.setText(val)
      }
    }
  }
}
</script>
