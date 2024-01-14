<script setup>
import UseInfoTrainer from '@/views/apps/trainer/add/UseInfoTrainer.vue'
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import UserBioPanel from '@/views/apps/user/view/UserBioPanel.vue'
import UseTrainerSalary from '@/views/apps/trainer/add/UseTrainerSalary.vue'
import UseTrainerCourseInfo from '@/views/apps/trainer/add/UseTrainerCourseInfo.vue'


const userListStore = useUserListStore()
const route = useRoute()
const userData = ref()
const userTab = ref(null)

const tabs = [
  {
    icon: 'tabler-user-check',
    title: 'المعلومات الشخصية',
  },
  {
    icon: 'tabler-currency-dollar',
    title: 'الراتب',
  },
  {
    icon: 'tabler-home-question',
    title: 'معلومات المسار',
  },
]

userListStore.fetchUser(4).then(response => {
  userData.value = response.data
})

const refInputE3 =ref('')


const uploadNewImage=i=>{
  console.log(i)
}
</script>

<template>
  <VRow v-if="userData">
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <div class="mb-8">
        <VCard title="الصورة الشخصية">
          <VCardText>
            <!-- 👉 Upload Photo -->
            <VAvatar
              rounded
              :size="200"
              class="me-6"
              image=""
            />
          </VCardText>
        </VCard>
        <div class="d-flex flex-wrap gap-2 mt-5">
          <VBtn
            color="primary"
            @click="refInputE3?.click()"
          >
            <VIcon
              icon="tabler-cloud-upload"
              class="d-sm-none"
            />
            <span class="d-none d-sm-block">ضع صورتك الشخصية</span>
          </VBtn>

          <input
            ref="refInputE3"
            type="file"
            name="file"
            accept=".jpeg,.png,.jpg,GIF"
            hidden
            @input="uploadNewImage"
          >
        </div>
      </div>
      <UserBioPanel :user-data="userData" />
    </VCol>

    <VCol
      cols="12"
      md="7"
      lg="8"
    >
      <VTabs
        v-model="userTab"
        class="v-tabs-pill"
      >
        <VTab
          v-for="tab in tabs"
          :key="tab.icon"
        >
          <VIcon
            :size="18"
            :icon="tab.icon"
            class="me-1"
          />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>

      <VWindow
        v-model="userTab"
        class="mt-6 disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <UseInfoTrainer />
        </VWindowItem>
        <VWindowItem>
          <UseTrainerSalary />

</VWindowItem>
<VWindowItem>
  <UseTrainerCourseInfo/>
</VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
