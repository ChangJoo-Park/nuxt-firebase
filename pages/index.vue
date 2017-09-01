<template>
  <section class="container">
    <div>
      <h1>Nuxt - Firebase</h1>
      <form @submit.prevent="submitBook">
        <div class="form-group">
          <label for="book-title">Title</label>
          <input type="text" class="form-control" id="book-title" v-model="newBook.title">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div class="book-list row">
        <div class="col-sm-4" v-for="book in books" :key="book['.key']">
          <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="http://via.placeholder.com/350x350" alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title">{{book.title}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from '~/store/firebase.js'

const db = firebase.app.database()
const booksRef = db.ref('books')

export default {
  firebase: {
    books: booksRef
  },
  data () {
    return {
      newBook: {
        title: ''
      }
    }
  },
  methods: {
    submitBook () {
      booksRef.push(this.newBook)
      this.resetNewBook()
    },
    resetNewBook () {
      this.newBook = {
        title: ''
      }
    }
  }
}
</script>

<style>

</style>
