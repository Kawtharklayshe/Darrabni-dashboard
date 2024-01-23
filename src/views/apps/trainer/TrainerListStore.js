import { defineStore } from 'pinia'

export const useTrainerListStore = defineStore('TrainerListStore', {
  actions: {
    addTrainer(trainerInfo) {
      console.log(trainerInfo.value)
      
      // return new Promise((resolve, reject) => {
      //   axiosIns.post('coach/store', {
      //     info: trainerInfo,
      //   }).then(response => resolve(response))
      //     .catch(error => reject(error))
      // })
    },

    // 👉 Fetch users data
    // fetchTrainer(params) { return axios.get('/apps/trainer', { params }) },

    // 👉 Add User
    

    // 👉 fetch single user
    // fetchTrainer(id) {
    //   return new Promise((resolve, reject) => {
    //     axios.get(`/apps/trainer/add/${id}`).then(response => resolve(response)).catch(error => reject(error))
    //   })
    // },

    // 👉 Delete User
    // deleteTrainer(id) {
    //   return new Promise((resolve, reject) => {
    //     axios.delete(`/apps/trainer/add/${id}`).then(response => resolve(response)).catch(error => reject(error))
    //   })
    // },
  },
})
