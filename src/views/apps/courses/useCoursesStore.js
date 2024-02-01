import { defineStore } from 'pinia'
import axiosIns from '@/plugins/axios'

export const useCoursesStore = defineStore('useCoursesStore', {
  actions: {
    // 👉

    // 👉 fetch all Specialization
    fetchAllCourses() {
      
      return new Promise((resolve, reject) => {
        axiosIns.get(`/course`).then(response =>  {
          resolve(response.data.data)}).catch(error => reject(error))
      })
    },

    // 👉 Add Specialization
    addCourse(CourseData) {
      console.log("اسم المسار المضاف:" + CourseData.name)
      
      return new Promise((resolve, reject) => {
        axiosIns.post('/course', CourseData,
        ).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single Specialization
    fetchCourse(id) {
      return new Promise((resolve, reject) => {
        axiosIns.get(`/course/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    // 👉 Delete Specialization
    deleteCourse(id) {
      return new Promise((resolve, reject) => {
        axiosIns.delete(`/course/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
