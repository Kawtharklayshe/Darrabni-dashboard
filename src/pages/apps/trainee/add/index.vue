<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import UserTrainee from '@/views/apps/user/view/UserTrainee.vue'

const userListStore = useUserListStore()
const route = useRoute()
const userData = ref()
const userTab = ref(null)

const tabs = [
  {
    icon: 'tabler-user-check',
    title: 'المعلومات',
  },

]

userListStore.fetchUser(4).then(response => {
  userData.value = response.data
})
</script>

<template>
  
  <VRow v-if="userData">
    <VCol
      cols="12"
      md="12"
      lg="18"
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
          <UserTrainee />
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
