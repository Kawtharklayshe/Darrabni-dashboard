import { defineStore } from 'pinia'
import axios from '@axios'

export const useLoginStore = defineStore('useLoginStore', {
  actions: {
    // 👉 Fetch trainer data
    fetchSpecialization(params) { return axios.get('/apps/trainer/List', { params }) },
    

    // 👉 Login
    login(LoginData) {
      console.log(LoginData)
      return new Promise((resolve, reject) => {
        axios.post('/login/', {
            email: LoginData.email,
            password :LoginData.password
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

  },
})
