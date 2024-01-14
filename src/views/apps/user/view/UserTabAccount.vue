<script setup>
const tab = ref("personal-info")
const firstName = ref("")
const lastName = ref("")
const middleName = ref("")
const birthDate = ref("")
const specialization = ref("")
const position = ref("")
const phoneNo = ref()
const username = ref("")
const id =ref("sp21")
const email = ref("")
const salary = ref()
const password = ref("")
const cPassword = ref("")
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const items =ref( ['هندسة المعلوماتية','هندسة الاتصالات'])
const  notes= ref('ملاحظات')

</script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info"> المعلومات الشخصية </VTab>
    <VTab value="account-details"> تفاصيل الحساب </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab" class="disable-tab-transition">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol md="6" cols="12">
                <AppTextField v-model="firstName" label="الأسم الأول" />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField v-model="middleName" label="الأسم الثاني" />
              </VCol>
              <VCol md="6" cols="12">
                <AppTextField v-model="lastName" label="الأسم الأخير" />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="birthDate"
                  label="تاريخ الميلاد"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="email"
                  label="البريد الالكتروني"
                  suffix="@example.com"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="password"
                  label="كلمة السر"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>
              
              <VCol md="6" cols="12">
              <AppSelect
               :items="items"
                label="الاختصاص"
                 />
                </VCol>
              <VCol md="6" cols="12">
                <AppTextField v-model="position" label="المهنة" />
              </VCol>
              
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="رقم الهاتف"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField v-model="salary" type="number" label="الراتب" />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField v-model="id"  label=" رقم تعريف الموظف " />
              </VCol>
              <VCol cols="12" md="12">
              <AppTextarea
              v-model="notes"
              label="ملاحظات"
              no-resize
              rows="2"
  />          </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol cols="12" md="6">
                <AppTextField v-model="username" label="اسم المستخدم" />
              </VCol>

              <VCol cols="12" md="6">
                <AppTextField
                  v-model="email"
                  label="البريد الالكتروني"
                  suffix="@example.com"
                />
              </VCol>
              

              <VCol cols="12" md="6">
                <AppTextField
                  v-model="password"
                  label="كلمة السر"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol cols="12" md="6">
                <AppTextField
                  v-model="cPassword"
                  label="تأكيد كلمة السر"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'
                  "
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>إرسال</VBtn>
      <VBtn color="secondary" variant="tonal"> إغلاق </VBtn>
    </VCardText>
  </VCard>
</template>
