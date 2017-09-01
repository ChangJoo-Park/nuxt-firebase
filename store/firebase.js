import firebase from 'firebase'
import Config from '~/store/firebase.config.js'

const initializeApp = () => {
  let app

  if (firebase.apps.length > 0) {
    app = firebase.app()
  } else {
    app = firebase.initializeApp(Config.firebase)
  }

  return app
}

export default {
  app: initializeApp(),
  initializeApp: initializeApp
}
