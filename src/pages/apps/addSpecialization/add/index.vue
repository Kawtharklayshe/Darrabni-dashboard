<script setup lang="ts">
import { useSpecializetionListStore } from '@/views/apps/addSpecialization/useSpecializationListStore'
import { ref } from 'vue'

const isDialogVisible = ref(false)
const specialtie = ref([])


const useSpecializationStore = useSpecializetionListStore()

const addSpecialties = ref(
  {
    name:'',
  }
)
  

const saveDialog = () => {
  useSpecializationStore.addSpecialization(addSpecialties.value).then(response => {
    // addSpecialties.value = response.data
})
    

  specialtie.value.push({ ...addSpecialties.value })
  addSpecialties.value = {
    name: '',   
  }
  isDialogVisible.value = false
}

</script>

<template>
  <VDialog v-model="isDialogVisible" max-width="600" class="my-3">ّ
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props" class="my-3">
        إضافة اختصاص
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />
    <!-- Dialog Content -->
    <VCard title="إضافة اختصاص ">
      <VCardText>
        <VRow>
          <VCol cols="12">

            <AppTextField v-model="addSpecialties.name" label="اسم الاختصاص" />
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
          id
        </th>
        <th class="text-uppercase">
          اسم الاختصاص
        </th>

      
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in specialtie" :key="index">
        <td>
          <!-- {{ item.id }} -->
        </td>
        <td>
          {{ item.name }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
 
