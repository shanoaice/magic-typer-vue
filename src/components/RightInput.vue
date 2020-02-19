<template>
  <textarea v-model="rightText" ></textarea>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: mapMutations({
    setText: 'setRightText'
  }),
  computed: {
    rightText: {
      get() {
        return this.$store.state.leftText.slice(0, this.$store.state.rightText.length)
      },
      set(val) {
        this.setText(val)
      }
    }
  }
}
</script>
