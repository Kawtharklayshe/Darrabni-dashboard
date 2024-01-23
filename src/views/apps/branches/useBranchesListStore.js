import { defineStore } from 'pinia'
import axios from '@axios'

export const useBranchesListStore = defineStore('BranchesStore', {
  actions: {
    // 👉 Fetch users data
    fetchBranches(params) { 
        console.log('Fetch users data')
        return axios.get('http://127.0.0.1:8000/brunch/index', { params }) },
    // 👉 Add Branche
    addBranche(userData) {
        console.log(' Add User')
      return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:8000/brunch/store', {
          user: userData,
        
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
     // 👉 update single user  update
     fetchBranche(id) {
        console.log('update')
        return new Promise((resolve, reject) => {
          axios.put(`http://127.0.0.1:8000/api/brunch/update/${id}`).then(response => resolve(response)).catch(error => reject(error))
        })
      },
    // 👉 Delete User
    deleteBranche(id) {
        console.log('delete')
      return new Promise((resolve, reject) => {
        axios.del(`http://127.0.0.1:8000/api/brunch/delete/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
