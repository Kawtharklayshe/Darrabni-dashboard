import { defineStore } from 'pinia'
import axios from '@axios'

export const useSpecializetionListStore = defineStore('SpecializationListStore', {
  actions: {
    // 👉 Fetch Specialties data
    fetchSpecialties(params) { 
        console.log('Fetch users data')
        return axios.get('/http://127.0.0.1:8000/api/specializetion/index', { params }) },
    // 👉 Add Specialization
    addSpecialization(userData) {
        console.log(userData)
      return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:8000/api/specializetion/store', {
          user: userData,
        
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    
       // 👉 fetch  user  index
       fetchSpecialization() {
        console.log('fetch  user  index')
        return new Promise((resolve, reject) => {
          axios.get(`http://127.0.0.1:8000/api/specializetion/index`).then(response => resolve(response)).catch(error => reject(error))
    })
      },
    // 👉 fetch single Specialization  show
    fetchSpecialization(id) {
        console.log('show')
      return new Promise((resolve, reject) => {
        axios.get(`http://127.0.0.1:8000/api/specializetion/index/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    // 👉 Delete Specialization
    deleteSpecialization(id) {
        console.log('delete')
      return new Promise((resolve, reject) => {
        axios.get(`http://127.0.0.1:8000/api/specializetion/delete/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
