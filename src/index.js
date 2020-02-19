import Vue from 'vue'
import { store } from './store'
// eslint-disable-next-line no-unused-vars
import LeftInput from './components/LeftInput.vue'
// eslint-disable-next-line no-unused-vars
import RightInput from './components/RightInput.vue'
import './style.scss'

// eslint-disable-next-line no-new
new Vue({
  store,
  el: '#app',
  render() {
    return (
      <div class="parent">
        <div class="title-area">
          <h1>Magic Typer</h1>
        </div>
        <div class="left-subtitle-area">
          <h2>Type something here ↓</h2>
        </div>
        <div class="right-subtitle-area">
          <h2>Then, type something here ↓ and see the magic happen</h2>
        </div>
        <LeftInput class="left-input" />
        <RightInput class="right-input" />
      </div>
    )
  }
})
