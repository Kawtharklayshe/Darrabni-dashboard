<script setup lang="ts">
import { ref } from 'vue'
import { useBranchesListStore  } from '@/views/apps/branches/useBranchesListStore'
import { label } from '@/views/demos/components/chip/demoCodeChip'
const isDialogVisible = ref(false)
const branches = ref([])
const branchesStore =useBranchesListStore()

const addBranches = ref(
  {
    prefix:'',
    name: '',
  },

)

const saveDialog = () => {
    branches.value.push({ ...addBranches.value })


  isDialogVisible.value = false

  branchesStore.addBranche({ ...addBranches.value }).then( response => {
    addBranches.value = response.data
})
}

</script>

<template>
  <VDialog v-model="isDialogVisible" max-width="600" class="my-3">ّ
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props" class="my-3">
        إضافة فرع
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />
    <!-- Dialog Content -->
    <VCard title="إضافة فرع ">
      <VCardText>
        <VRow>
          <VCol>
          <AppTextField v-model="addBranches.prefix" label="prefix" />
        </VCol>
        </VRow>
        <VRow>
        <VCol>
          <AppTextField v-model="addBranches.name" label="اسم الفرع" />
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
          prefix
        </th>
        <th class="text-uppercase">
          اسم الفرع
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in branches" :key="index">
        <td>
          {{ item.prefix }}
        </td>
        <td>
          {{ item.name }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
 
