import { defineStore } from 'pinia'
import axios from '@axios'

export const useCourseStore = defineStore('CourseStore', {
  actions: {
    // 👉 Fetch users data
    fetchCourses(params) { 
        console.log('Fetch users data')
        return axios.get('http://127.0.0.1:8000/api/course', { params }) },
    // 👉 Add Course
    addCourse(userData) {
        console.log(' Add User')
      return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:8000/api/course', {
          user: userData,
        
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
       // 👉 fetch  Course  show
       fetchCourse() {
        console.log('fetch  user')
        return new Promise((resolve, reject) => {
          axios.get(`http://127.0.0.1:8000/api/course`).then(response => resolve(response)).catch(error => reject(error))
    })
      },
   
     // 👉 update single user  update
     fetchCourse(id) {
        console.log('update')
        return new Promise((resolve, reject) => {
          axios.update(`http://127.0.0.1:8000/api/course/${id}`).then(response => resolve(response)).catch(error => reject(error))
        })
      },
    // 👉 Delete User
    deleteCourse(id) {
        console.log('delete')
      return new Promise((resolve, reject) => {
        axios.delete(`http://127.0.0.1:8000/api/course/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
