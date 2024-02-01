<script setup>
import { VForm } from 'vuetify/components/VForm'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import axios from '@axios'
import Darrebnilogo from '@images/d.jpg'
import axiosIns from '@/plugins/axios'
import avatar1 from '@images/avatars/avatar-1.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import {
  emailValidator,
  requiredValidator,
} from '@validators'

import setAuthHeader from '@/plugins/utils/setAuthHeader.js'

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const isPasswordVisible = ref(false)
const route = useRoute()
const router = useRouter()
const ability = useAppAbility()

const errors = ref({
  email: undefined,
  password: undefined,
})

const refVForm = ref()


const form = ref({
  email: 'uhowe@example.org',
  password: '123456789',
  remember: false,
})

const login = () => {
  axiosIns.post('/login', form.value)
    .then(res => {
      console.log(res.data)

      const { user: { name }, token } = res.data.data

      console.log(token, name)

      const userAbilities = [
        {
          action: 'manage',
          subject: 'all',
        },
      ]

      const userData = {
        id: 1,
        fullName: 'John Doe',
        username: 'johndoe',
        avatar: avatar1,
        email: 'admin@demo.com',
        role: 'admin',
      }

      setAuthHeader(token)
      localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
      ability.update(userAbilities)

      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('accessToken', JSON.stringify(token))
      localStorage.setItem('userName', JSON.stringify(name))

      console.log('after store in localStorage')

      // Redirect to to query if exist or redirect to index route
      router.replace(route.query.to ? String(route.query.to) : '/')
    }).catch(e => {
      // const { errors: formErrors } = e.response.data

      // errors.value = formErrors
      // console.error(e.response.data)
      console.error(e)
    })
}
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper bg-surface"
  >
    <VCol
      md="8"
      class="d-none d-md-flex"
    >
      <div class="position-relative  rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg
            max-width="450"
            max-height="450"
            :src="Darrebnilogo"
            class="auth-illustration mt-16 mb-2"
          />
        </div>
      </div>
    </VCol>
    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-0 mt-sm-0 pa-4 bg-background"
      >
        <VCardText>
          <img
            src="@images/logo3.svg"
            width="50"
            alt=""
          >
          <h5 class="text-h5 mb-1">
            مرحباً بك في <span class="text-capitalize">{{ themeConfig.app.title }}</span>! 👋🏻
          </h5>
          <p class="mb-0">
            يرجى تسجيل الدخول إلى حسابك والبدء في المغامرة
          </p>
        </VCardText>
        <VCardText>
          <VForm @submit.prevent="() => { }">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  autofocus
                  label="البريد الإلكتروني"
                  type="email"
                  :rules="[requiredValidator, emailValidator]"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.password"
                  label="كلمة المرور"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :rules="[requiredValidator]" 
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
                <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4">
                  <VCheckbox
                    v-model="form.remember"
                    label="تذكرني"
                  />
                  <RouterLink
                    class="text-primary ms-2 mb-1"
                    :to="{ name: 'pages-authentication-forgot-password-v2' }"
                  >
                    نسيت كلمة المرور ؟
                  </RouterLink>
                </div>

                <VBtn
                  block
                  type="submit"
                  @click="login"
                >
                  تسجيل الدخول
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                cols="12"
                class="text-center text-base"
              >
                <span>جديد على منصتنا؟</span>
                <RouterLink
                  class="text-primary ms-2"
                  :to="{ name: 'pages-authentication-register-v2' }"
                >
                  أنشئ حسابًا
                </RouterLink>
              </VCol>

              <VCol
                cols="12"
                class="d-flex align-center"
              >
                <VDivider />
                <span class="mx-4">or</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol
                cols="12"
                class="text-center"
              >
                <AuthProvider />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
