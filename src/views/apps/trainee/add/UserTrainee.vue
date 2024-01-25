<script setup>
import { useTraineeStore } from "../useTraineeStore";
const Trainee=ref({
  first_name_ar:'',
  middle_name_ar:'',
  last_name_ar:'',
  first_name_en:'',
  middle_name_en:'',
  last_name_en:'',
  email:'',
  phone_number:'',
  date:''
})
const traineStore=useTraineeStore()
const  saveTra = () =>{
  traineStore.addTrainee(Trainee).then(response => {
  userData.value = response.data
})
}
</script>

<template>
  <div class="mx-4" > 
  <VForm @submit.prevent="() => {}" >

    <VRow class="mx-2 my-3">
      <!-- 👉 First Name -->
      <VCol
     
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="Trainee.first_name_ar"
          label="الاسم الأول "
          prepend-inner-icon="tabler-user"
          placeholder="John "
        
          
        />
      </VCol>
      <!-- 👉 Middle Name -->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="Trainee.middle_name_ar"
          label="اسم الأب "
          prepend-inner-icon="tabler-user"
          placeholder="Ahmad "
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
       
          v-model="Trainee.last_name_ar"
          label="الاسم الأخير "
          prepend-inner-icon="tabler-user"
          placeholder="Doe"
        />
      </VCol>

       <!-- 👉 First Name -->
       <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="Trainee.first_name_en"
          label=" الاسم الأول بالانكليزي"
          prepend-inner-icon="tabler-user"
          placeholder="John "
        />
      </VCol>
         <!-- 👉 First Name -->
         <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="Trainee.middle_name_en"
          label=" اسم الأب بالانكليزي"
          prepend-inner-icon="tabler-user"
          placeholder="John "
        />
      </VCol>
       <!-- 👉 Last Name -->

      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="Trainee.last_name_en"
          label=" الاسم الأخير بالانكليزي"
          prepend-inner-icon="tabler-user"
          placeholder="Doe  "
        />
      </VCol>

          <!-- 👉 المواليد -->
          <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="Trainee.date"
          label="المواليد"
          prepend-inner-icon="tabler-address-book"
          placeholder="1-7-2003"
        />
      </VCol>

         <!-- 👉 الاختصاص الجامعي -->
         <!-- <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="university"
          label="الاختصاص الجامعي "
          placeholder=" IT"
        />
      </VCol> -->

        <!-- 👉 الهاتف -->

        <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="Trainee.phone_number"
          type="number"
          label="الهاتف"
          prepend-inner-icon="tabler-device-mobile"
          placeholder="963+"
        />
      </VCol>
      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="Trainee.email"
          label="ايميل"
          prepend-inner-icon="tabler-mail"
          placeholder="john@gmail.com"
        />
      </VCol>
      <!-- 👉 course -->
<!-- 
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="course"
          label="المسار"
          placeholder="FronEnd"
        />
      </VCol> -->

        <!-- 👉 الدفعة التدريبية  -->
       <!-- <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="selectedRole"
                  label="الدفعة التدريبية "
                  :items="roles"
                  clearable
                  clear-icon="tabler-x"
                />
        </VCol> -->
      <VCol
        cols="12"
        class="d-flex justify-end gap-4 my-2"
      >
        <VBtn type="submit" @click='saveTra'>
          إرسال
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
</div>
</template>
<style  scoped>
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
</style>
