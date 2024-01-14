<script setup>
const firstName = ref('')
const lastName = ref('')
const EFirstName = ref('')
const ELastName = ref('')
const Emaile = ref('')
const middleName = ref('')
const BDate = ref('')
const univercity = ref('')
const train = ref('')
const number = ref('')
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow  class="mx-2 my-2">
      <!-- 👉الاسم الاول  -->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="firstName"
          label="الاسم الاول"
          placeholder="john"
        />
      </VCol>

      <!-- 👉 اسم الاب -->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="middleName"
          label="اسم الاب "
          placeholder="bob"
        />
      </VCol>

      <!-- 👉 الكنية-->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="lastName"
          label="الاسم الاخير"
          placeholder="Doe"

        />
      </VCol>
      <!-- 👉 الاسم الاول بالانكليزي -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="EFirstName"
          label="الاسم الاول بالانكليزي" 
          placeholder="john"

        />
      </VCol>

      <!-- 👉 اسم الثاني بالانكليزي -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="ELastName"
          label="اسم الثاني بالانكليزي "
          placeholder="Doe"
        />
      </VCol>
      <!-- 👉 الايميل -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="Emaile"
          label="الايميل"
          type="emaile"
          placeholder="john@gmail.com"
        />
      </VCol>

      <!-- 👉 الهاتف -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="number"
          type="number"
          label="رقم الهاتف"
          placeholder="+963 9382667838"
        />
      </VCol>

      <!-- 👉 المسار -->
    
      <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        id="course"
        v-model="course"
        label="المسار"
        placeholder="FrontEnd"
        persistent-placeholder
      />
    </VCol>
    <!--👉 الاختصاص الجامعي -->
    <VCol
    cols="12"
    md="6"
  >
    <AppTextField
      id="univercity"
      v-model="univercity"
      label="الاختصاص الجامعي"
      placeholder="IT"
      persistent-placeholder
    />
  </VCol>
  <!--👉 المواليد -->
  <VCol
  cols="12"
  md="6"
>
  <AppTextField
    id="BDate"
    v-model="BDate"
    label="المواليد"
    placeholder="17/3/2000"
    persistent-placeholder
  />
</VCol>
  <!--👉 الدفعة التدريبية -->
  <VCol
  cols="12"
  md="6"
>
  <AppTextField
    id="train"
    v-model="train"
    label="الدفعة التدريبية"
    placeholder="first"
    persistent-placeholder
  />
</VCol>
  <!--👉 حفظ/حذف -->
      <VCol
        cols="12"
        class="d-flex justify-end gap-4"
      >
        <VBtn type="submit">
          حفظ
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          حذف
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
<style>
  
</style>