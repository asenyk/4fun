<template>
  <div>
    <input type="text" v-model="todoText"/>
    <button @click="addItem">Add item</button>
    <div v-for="(todo, index) in todos" :key="todo.id">
      <span :class="{ 'done':todo.completed }"
            @click="markCompleted(todo)">
        {{ todo.text }}
      </span>
      <button @click="deleteItem(index)">X</button>
    </div>
    <hr>
    <button @click="testWriteFirestore()">Write Firestore</button>
    <hr>
    <hr>
    <hr>
    Title <input type="text" v-model="title"/>
    Description <input type="text" v-model="description"/>
    <hr>
    <button @click="addData()">Add data</button>
    <hr>
    <button @click="getData()">Get data</button>
    <hr>
    {{ dataServ }}
  </div>
</template>

<script>
import axios from 'axios'
import { db } from '../firebase'

export default {
  data () {
    return {
      todoText: '',
      todos: [],
      title: '',
      description: '',
      dataServ: []
    }
  },
  methods: {
    addData () {
      const data = {
        title: this.title,
        description: this.description
      }
      axios.post('tutorials', data)
        .then(response => {
          console.log(response)
        })
    },
    getData () {
      axios.get('tutorials')
        .then(response => {
          console.log(response)
          this.dataServ = response.data
        })
    },
    testWriteFirestore () {
      db.collection('users').add({
        testField1: 'Qwe',
        testField2: 'Qwerty',
        testField3: 12
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    addItem () {
      if (this.todoText !== '') {
        const createId = () => parseInt(Math.random() * 10000000000000)
        const obj = {
          id: createId(),
          text: this.todoText,
          completed: false
        }
        this.todos.push(obj)
        this.todoText = ''
      }
    },
    markCompleted (todo) {
      todo.completed = !todo.completed
    },
    deleteItem (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
