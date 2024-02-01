
<script setup>
import { onMounted, ref } from "vue"
import { requiredValidator } from '@validators'

import { useCoursesStore } from "@/views/apps/courses/useCoursesStore"

const Name = ref('')
const prefix = ref('')
const store = useCoursesStore()

const specArray = ref([])

onMounted(() => {
  store.fetchAllCourses().then(res=>{
    console.log(res)
    specArray.value = res
    console.log('vvvvvvvvvvv' + specArray.value)
  })
 
  

})

// لتجريب الجدول
// let specArray =[{ name: "dmdjdn", prefix: 11 }, { name: "dmdjdn", prefix: 11 }]

const isDialogVisible = ref(false)


const sendSpec = () => {
  store.addCourse({ name: Name.value, prefix: prefix.value })
  isDialogVisible.value = false
}

const deleteCourse = id => {
  store.deleteCourse(id)
  console.log('delete')
}
</script>

<template>
  <h1 class="mb-3">
    المسارات
  </h1>

  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    
    <template #activator="{ props }">
      <VBtn
        v-bind="props"
        class="mb-8"
      >
        <span>إضافة مسار</span>
        <!--
          <IconBtn>
          <VIcon icon="tabler-circle-plus" />
          </IconBtn> 
        -->
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="إضافة مسار">
      <VCardText>
        <VRow>
          <VCol cols="12">
            <AppTextField
              v-model="Name"
              :rules="[requiredValidator]"
              label="اسم المسار"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12">
            <AppTextField
              v-model="prefix"
              :rules="[requiredValidator]"
              label=" الدفعة التدريبية"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          إغلاق
        </VBtn>
        <VBtn @click="sendSpec">
          حفظ 
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VTable class="text-no-wrap">
    <thead>
      <tr>
        <th class="text-uppercase">
          المسارات
        </th>
        <th class="text-uppercase text-center">
          الدفعة التدريبية
        </th>
        <th class="text-uppercase ">
          حذف
        </th>
      </tr>
    </thead>

    <tbody v-for="item in specArray">
      <tr>
        <td>{{ item.name }}</td>
        <td class="text-center">
          {{ item.prefix }}
        </td>
        <td>
          <VIcon
            size="22"
            icon="tabler-trash"
            class="mt-1"
            style="opacity: 1;"
            @click="deleteCourse(item.id)"
          />
        </td>
      </tr>
    </tbody>
  </VTable>
</template>

