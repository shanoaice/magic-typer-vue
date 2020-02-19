<template>
  <textarea v-model="rightText"></textarea>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    rightText: {
      get() {
        return this.$store.state.leftText.slice(
          0,
          this.$store.state.rightText.length
        )
      },
      set(value) {
        this.setText(value)
      }
    }
  },
  methods: mapMutations({
    setText: 'setRightText'
  })
}
</script>
