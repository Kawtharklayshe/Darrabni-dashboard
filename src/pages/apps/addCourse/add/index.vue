<script setup lang="ts">
import { ref } from 'vue'

const isDialogVisible = ref(false)
const course = ref([])


const addCourses = ref(
  {
    nameCourse: '',
    numTrain: '',
    cost: ''

  },

)

const saveDialog = () => {
  course.value.push({ ...addCourses.value })

  addCourses.value = {
    nameCourse: '',
    numTrain: '',
    cost: ''
  }
  isDialogVisible.value = false
}

</script>

<template>
  <VDialog v-model="isDialogVisible" max-width="600" class="my-3">
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props" class="my-3">
        إضافة مسار
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />
    <!-- Dialog Content -->
    <VCard title="إضافة مسار ">
      <VCardText>
        <VRow>
          <VCol cols="12">

            <AppTextField v-model="addCourses.nameCourse" label="اسم المسار" />
          </VCol>
          <VCol cols="12">
            <AppTextField v-model="addCourses.cost" label=" تكلفة المسار " />
          </VCol>
          <VCol cols="12">
            <AppTextField v-model="addCourses.numTrain" label=" الدفعة التدريبية" persistent-hint />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn variant="tonal" color="secondary" @click="isDialogVisible = false">
          إغلاق
        </VBtn>
        <VBtn @click="saveDialog">
          حفظ
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VTable class="text-no-wrap">
    <thead>
      <tr>
        <th class="text-uppercase">
          اسم المسار
        </th>
        <th class="text-uppercase text-center">
          الدفعة التدريبية
        </th>
        <th class="text-uppercase text-center">
          تكلفة المسار
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in course" :key="index">
        <td>
          {{ item.nameCourse }}
        </td>
        <td class="text-center">
          {{ item.numTrain }}
        </td>
        <td class="text-center">
          {{ item.cost }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>