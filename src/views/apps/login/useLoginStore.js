import { defineStore } from 'pinia'
import axios from '@axios'

export const useLoginStore = defineStore('useLoginStore', {
  actions: {
    // 👉 Fetch trainer data
    fetchSpecialization(params) { return axios.get('/apps/trainer/List', { params }) },
    sw56

    // 👉 Login
    login(LoginData) {
      console.log(LoginData)

      const form= new FormData()

      form.append("email", LoginData.email)
      form.append("password", LoginData.password)
      
      return new Promise((resolve, reject) => {
        axios.post('/login', form).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

  },
})
