<script setup>
import AppSelect from '@/@core/components/app-form-elements/AppSelect.vue'

const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const specialization = ref('')
const startDate = ref('')
const salaryStartDate = ref('')
const salary = ref('')
const sessionSalary = ref('')
const sessionTotalHours = ref('')
const sessionTime = ref('')
const checkbox = ref(false)

const items = ['السبت ', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة']
const selected = ref([])
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="firstName"
          label="الاسم الأول "
        />
      </VCol>

      <!-- 👉 Middle Name -->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="middleName"
          label="اسم الأب"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="lastName"
          label="الاسم الأخير"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="12"
      >
        <AppTextField
          v-model="email"
          label="البريد الالكتروني"
        />
      </VCol>

      <!-- 👉 Specialization -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specialization"
          label="الاختصاص"
        />
      </VCol>

      <!-- 👉 Start Date -->
      <VCol
        cols="12"
        md="6"
      >
        <AppDateTimePicker
          v-model="startDate"
          label="تاريخ البداية "
        />
      </VCol>

      <!-- 👉 Salary -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="salary"
          type="number"
          label="الراتب"
        />
      </VCol>
      
      <!-- 👉 Salary Start Date -->
      <VCol
        cols="12"
        md="6"
      >
        <AppDateTimePicker
          v-model="salaryStartDate"
          label="تاريخ أول راتب"
        />
      </VCol>

      <VDivider class="my-5" />

      <!-- 👉 session Salary -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="sessionSalary"
          type="number"
          label="راتب الجلسة"
        />
      </VCol>

      <!-- 👉 Session Total Hours -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="sessionTotalHours"
          type="number"
          label="اجمالي الساعات "
        />
      </VCol>

      <!-- 👉 Session Days -->
      <VCol
        cols="12"
        md="6"
      >
        <AppSelect
          v-model="selected"
          v-col
          :items="items"
          label="ايام الجلسات"
          chips

          multiple
        />
      </VCol>
      <!-- 👉 Session Salary -->
      <VCol
        cols="12"
        md="6"
      >
        <AppDateTimePicker
          v-model="sessionTime"
          label="موعد الجلسة"
          :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
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
