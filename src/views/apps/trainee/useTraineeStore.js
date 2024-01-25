import { defineStore } from 'pinia'
import axios from '@axios'

export const useTraineeStore = defineStore('TraineeListStore', {
  actions: {
    // 👉 Fetch Trainees data
    fetchTrainee(params) { return axios.get('http://127.0.0.1:8000/api/trainee', { params }) },

    // 👉 Add Trainee
    addTrainee(userData) {
      console.log(userData)
      return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:8000/api/trainee', {
          user: userData,
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single Trainee  
    fetchTrainee() {
      return new Promise((resolve, reject) => {
        axios.get(`http://127.0.0.1:8000/api/trainee`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  
  
    // 👉 Delete Trainee
    deleteTrainee(id) {
      return new Promise((resolve, reject) => {
        axios.del(`http://127.0.0.1:8000/api/trainee/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
