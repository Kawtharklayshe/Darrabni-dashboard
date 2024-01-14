import { defineStore } from 'pinia'
import axios from '@axios'

export const useTrainerListStore = defineStore('useTrainerListStore', {
  actions: {
    // 👉 Fetch trainer data
    fetchTrainer(params) { return axios.get('/apps/trainer/List', { params }) },

    // 👉 Add trainer
    addTrainer(trainerData) {
      return new Promise((resolve, reject) => {
        axios.post('/apps/trainer', {
          trainer: trainerData,
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single trainer
    fetchTrainer(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/apps/trainer/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    // 👉 Delete trainer
    deleteTrainer(id) {
      return new Promise((resolve, reject) => {
        axios.delete(`/apps/trainer/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
