<script setup>
import AppSelect from '@/@core/components/app-form-elements/AppSelect.vue'
import { useTrainerListStore } from "@/views/apps/trainer/TrainerListStore"
import { emailValidator, regexValidator, requiredValidator } from '@validators'
import { ref } from 'vue'

// import type { VForm } from 'vuetify/components/VForm'

const formData = ref({
  firstName: 'john',
  middleName: 'mark',
  lastName: 'doe',
  trainerId: 'sp210000',
  birthDate: '01/01/2000',
  email: 'example@gmail.com',
  phoneNumber: '0900000000',
  notes: '',
  TrainingBatch: '2',
  address: 'Homs, Syria',
  specializationSelected: 'مهندس اتصالات',
  pathSelected: 'Front End',
  branchSelected: 'ايميسا',
})

// const firstName = ref('')
// const middleName = ref('')
// const lastName = ref('')
// const trainerId = ref('sp21')
// const birthDate = ref('')
// const email = ref('')
// const phoneNumber = ref('09')
// const notes= ref('')
// const TrainingBatch =ref('')
// const address = ref('')


const refForm = ('')


const myStore = useTrainerListStore()

const specializationSelected = ref([])
const specialization = ref(['مهندس معلوماتية ', 'مهندس اتصالات'])
const pathSelected = ref([])
const path = ref(['Front End', 'Back End', 'Mopile Application'])
const branchSelected = ref([])
const branch = ref(['ايميسا', 'التربية', 'online'])



const onSubmit = () => {
  myStore.addTrainer(formData)
 
}
</script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="formData.firstName"
          :rules="[requiredValidator]"
          label="الاسم الأول "
        />
      </VCol>

      <!-- 👉 Middle Name -->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="formData.middleName"
          :rules="[requiredValidator]"
          label="اسم الأب"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="formData.lastName"
          :rules="[requiredValidator]"
          label="الاسم الأخير"
        />
      </VCol>

      <!-- 👉 Trainer Id -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="formData.trainerId"
          :rules="[requiredValidator, regexValidator(formData.trainerId, '^sp21\d{4}$', 'Please enter sp21 followed by 4 numbers')] "
          label="معرف المدرب"
        />
      </VCol>

      
      <!-- 👉 Birth Date -->
      <VCol
        cols="12"
        md="6"
      >
        <AppDateTimePicker
          v-model="formData.birthDate"
          :rules="[requiredValidator]"
          label="تاريخ الميلاد "
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="formData.email"
          :rules="[requiredValidator, emailValidator]"
          persistent-placeholder
          label="البريد الالكتروني"
        />
      </VCol>

      <!-- 👉 Phone Number -->
      <VCol  
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="formData.phoneNumber"
          :rules="[requiredValidator, regexValidator(formData.phoneNumber, '^09[0-9]{8}$', 'Please enter a syrian phone number')]"
          label="رقم الهاتف"
        />
      </VCol>

      <VCol
        cols="12" 
        md="12" 
      >
        <AppTextField 
          v-model="formData.address" 
          :rules="[requiredValidator]"
          label="العنوان"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppSelect
          v-model="formData.specializationSelected"
          v-col
          :items="specialization"
          :rules="[requiredValidator]"
          label="الاختصاص"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppSelect
          v-model="formData.pathSelected"
          v-col
          :items="path"
          :rules="[requiredValidator]"
          label="المسار"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="formData.TrainingBatch"
          :rules="[requiredValidator, regexValidator(formData.TrainingBatch, '^[0-9]+$', 'Enter an approperiate Training Batch Number')]"
          label="الدفعة التدريبية"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppSelect
          v-model="formData.branchSelected"
          v-col
          :items="branch"
          :rules="[requiredValidator]"
          label="الفرع"
        />
      </VCol>
      <VCol
        cols="12" 
        md="12" 
      >
        <AppTextarea 
          v-model="formData.notes"
          label="الملاحظات"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn
          type="submit"
          @click="() => {
            refForm?.validate()
            onSubmit()
          }"
        >
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
