import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from 'firebase'
import firebaseSetting from '~/store/firebase.js'
import VueFire from 'vuefire'

firebaseSetting.initializeApp()

Vue.use(VueFire)
Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      books: []
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore
