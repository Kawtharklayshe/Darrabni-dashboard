<script setup>
<<<<<<< HEAD
import americanExpress from '@images/icons/payments/american-express.png'
import mastercard from '@images/icons/payments/mastercard.png'
import visa from '@images/icons/payments/visa.png'

const isUpgradePlanDialogVisible = ref(false)
const currentCardDetails = ref()
const isCardEditDialogVisible = ref(false)
const isCardAddDialogVisible = ref(false)
const isEditAddressDialogVisible = ref(false)

const openEditCardDialog = cardDetails => {
  currentCardDetails.value = cardDetails
  isCardEditDialogVisible.value = true
}

const creditCards = [
  {
    name: 'Tom McBride',
    number: '4851234567899865',
    expiry: '12/24',
    isPrimary: true,
    type: 'mastercard',
    cvv: '123',
    image: mastercard,
  },
  {
    name: 'Mildred Wagner',
    number: '5531234567895678',
    expiry: '02/24',
    isPrimary: false,
    type: 'visa',
    cvv: '456',
    image: visa,
  },
  {
    name: 'Lester Jennings',
    number: '5531234567890002',
    expiry: '08/20',
    isPrimary: false,
    type: 'visa',
    cvv: '456',
    image: americanExpress,
  },
]

const currentBillingAddress = {
  companyName: 'Pixinvent',
  billingEmail: 'gertrude@gmail.com',
  taxID: 'TAX-875623',
  vatNumber: 'SDF754K77',
  address: '100 Water Plant Avenue, Building 1303 Wake Island',
  contact: '+1(609) 933-44-22',
  country: 'USA',
  state: 'Queensland',
  zipCode: 403114,
=======



const items = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء','الاربعاء', 'الخميس', 'الجمعة']
const selected = ref([])
const time = ref('')

const salaryDetails=ref({
  salaryInHours: "",
  salaryDate: "",

  // الحضور بالساعات
  attendanceHours: "",

  //الخصم
  salaryDeduction: "",
})

const salaryArray=ref([

])

// Recent devices Headers
const recentDeviceHeader = [
  {
    title: 'الراتب بالساعة',
    key: 'salaryInHours',
  },
  {
    title: 'تاريخ الراتب',
    key: 'salaryDate',
  },
  {
    title: 'عدد ساعات الحضور',
    key: 'attendanceHours',
  },
  {
    title: 'الخصم',
    key: 'salaryDeduction',
  },
  {
    title: 'الراتب المستحق',
    key: 'total',
  },
]

// const recentDevices = [
//   {
//     browser: ' Chrome on Windows',
//     icon: 'tabler-brand-windows',
//     color: 'info',
//     device: 'HP Spectre 360',
//     location: 'Switzerland',
//     activity: '10, July 2021 20:07',
//   },
//   {
//     browser: 'Chrome on iPhone',
//     icon: 'tabler-device-mobile',
//     color: 'error',
//     device: 'iPhone 12x',
//     location: 'Australia',
//     activity: '13, July 2021 10:10',
//   },
//   {
//     browser: 'Chrome on Android',
//     icon: 'tabler-brand-android',
//     color: 'success',
//     device: 'Oneplus 9 Pro',
//     location: 'Dubai',
//     activity: '14, July 2021 15:15',
//   },
//   {
//     browser: 'Chrome on MacOS',
//     icon: 'tabler-brand-apple',
//     color: 'secondary',
//     device: 'Apple iMac',
//     location: 'India',
//     activity: '16, July 2021 16:17',
//   },
//   {
//     browser: 'Chrome on Windows',
//     icon: 'tabler-brand-windows',
//     color: 'info',
//     device: 'HP Spectre 360',
//     location: 'Switzerland',
//     activity: '20, July 2021 21:01',
//   },
//   {
//     browser: 'Chrome on Android',
//     icon: 'tabler-brand-android',
//     color: 'success',
//     device: 'Oneplus 9 Pro',
//     location: 'Dubai',
//     activity: '20, July 2021 21:01',
//   },
// ]

// functions

const saveData = () =>{
  
  salaryArray.value.push(salaryDetails.value)

  // reset data 
  // salaryDetails.value.salaryInHours = ""
>>>>>>> 7962093 (Yhea-Team)
}
</script>

<template>
  <VRow>
<<<<<<< HEAD
    <!-- 👉 Current Plan -->
    <VCol cols="12">
      <VCard title="Current Plan">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
              order-md="1"
              order="2"
            >
              <h6 class="text-base font-weight-medium text-high-emphasis mb-1">
                Your Current Plan is Basic
              </h6>
              <p class="text-sm mb-3">
                A simple start for everyone
              </p>

              <h6 class="text-base font-weight-medium text-high-emphasis mb-1">
                Active until Dec 09, 2021
              </h6>
              <p class="text-sm mb-3">
                We will send you a notification upon Subscription expiration
              </p>

              <h6 class="text-base font-weight-medium text-high-emphasis mb-1">
                <span class="me-2">$199 Per Month</span>
                <VChip
                  color="primary"
                  size="small"
                  label
                >
                  popular
                </VChip>
              </h6>
              <p class="text-sm mb-0">
                Standard plan for small to medium businesses
              </p>
            </VCol>

            <VCol
              cols="12"
              md="6"
              order-md="2"
              order="1"
            >
              <!-- 👉 Alert -->
              <VAlert
                color="warning"
                variant="tonal"
              >
                <VAlertTitle class="mb-2">
                  We need your attention!
                </VAlertTitle>
                <span>Your plan requires update</span>
              </VAlert>

              <!-- 👉 Progress -->
              <div class="d-flex justify-space-between font-weight-bold mt-4 mb-2">
                <h6 class="text-sm">
                  Days
                </h6>
                <h6 class="text-sm">
                  26 of 30 Days
                </h6>
              </div>

              <VProgressLinear
                rounded
                color="primary"
                :height="10"
                :model-value="75"
              />
              <p class="text-sm mt-2">
                6 days remaining until your plan requires update
              </p>
            </VCol>

            <VCol
              cols="12"
              order="3"
            >
              <div class="d-flex flex-wrap gap-4">
                <VBtn @click="isUpgradePlanDialogVisible = true">
                  upgrade plan
                </VBtn>

                <VBtn
                  color="error"
                  variant="tonal"
                >
                  Cancel Subscription
                </VBtn>
              </div>
            </VCol>
          </VRow>
=======
    <VCol cols="12">
      <!-- 👉 Change password -->
      <VCard title="مدة المسار">
        <VCardText>
          <VForm @submit.prevent="() => { }">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
              <AppSelect
              v-model="selected"
              :items="items"
              label="أيام المسار"
              chips
              multiple
            />
              </VCol>
              <VCol
                cols="12"
                md="3"
              >
               <AppDateTimePicker
              v-model="time"
              label="ساعة البدء"
              :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
            /></VCol> <VCol>
           <AppDateTimePicker
    v-model="time"
    label="ساعة  الانتهاء"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  /> </VCol>
             
            </VRow>
            <VRow>
            
              <VCol cols="12">
                <VBtn
                  type="submit"
                  @click="saveData"
                >
                  حفظ
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
>>>>>>> 7962093 (Yhea-Team)
        </VCardText>
      </VCard>
    </VCol>

<<<<<<< HEAD
    <!-- 👉 Payment Methods -->
    <VCol cols="12">
      <VCard title="Payment Methods">
        <template #append>
          <VBtn
            prepend-icon="tabler-plus"
            size="small"
            @click="isCardAddDialogVisible = !isCardAddDialogVisible"
          >
            Add Card
          </VBtn>
        </template>

        <VCardText class="d-flex flex-column gap-y-4">
          <VCard
            v-for="card in creditCards"
            :key="card.name"
            border
            flat
          >
            <VCardText class="d-flex flex-sm-row flex-column pa-4">
              <div class="text-no-wrap">
                <VImg
                  :src="card.image"
                  :width="60"
                  :height="25"
                />
                <p class="text-base my-3">
                  {{ card.name }}
                  <VChip
                    v-if="card.isPrimary"
                    label
                    color="primary"
                    size="small"
                  >
                    Primary
                  </VChip>
                </p>
                <span class="text-body-1">**** **** **** {{ card.number.substring(card.number.length - 4) }}</span>
              </div>

              <VSpacer />

              <div class="d-flex flex-column text-sm-end gap-2">
                <div class="order-sm-0 order-1">
                  <VBtn
                    variant="tonal"
                    class="me-2"
                    @click="openEditCardDialog(card)"
                  >
                    Edit
                  </VBtn>
                  <VBtn
                    color="secondary"
                    variant="tonal"
                  >
                    Delete
                  </VBtn>
                </div>

                <span class="mt-auto order-sm-1 order-0">Card expires at {{ card.expiry }}</span>
              </div>
            </VCardText>
          </VCard>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Billing Address -->
      <VCard title="Billing Address">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              lg="6"
            >
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Company Name:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-0">
                      {{ currentBillingAddress.companyName }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Billing Email:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-0">
                      {{ currentBillingAddress.billingEmail }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Tax ID:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-0">
                      {{ currentBillingAddress.taxID }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      VAT Number:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-0">
                      {{ currentBillingAddress.vatNumber }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="d-flex align-baseline">
                    <h6 class="text-h6 text-no-wrap">
                      Billing Address:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-0">
                      {{ currentBillingAddress.address }}
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>

            <VCol
              cols="12"
              lg="6"
            >
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Contact:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-0">
                      {{ currentBillingAddress.contact }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Country:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-0">
                      {{ currentBillingAddress.country }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      State:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-0">
                      {{ currentBillingAddress.state }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap">
                      Zip Code:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-0">
                      {{ currentBillingAddress.zipCode }}
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <!-- 👉 Edit Card Dialog -->
  <CardAddEditDialog
    v-model:isDialogVisible="isCardEditDialogVisible"
    :card-details="currentCardDetails"
  />

  <!-- 👉 Add Card Dialog -->
  <CardAddEditDialog v-model:isDialogVisible="isCardAddDialogVisible" />

  <!-- 👉 Edit Address dialog -->
  <AddEditAddressDialog
    v-model:isDialogVisible="isEditAddressDialogVisible"
    :billing-address="currentBillingAddress"
  />

  <!-- 👉 Upgrade plan dialog -->
  <UserUpgradePlanDialog v-model:isDialogVisible="isUpgradePlanDialogVisible" />
</template>

<style lang="scss">
.billing-address-table {
  tr {
    td:first-child {
      inline-size: 148px;
    }
  }
}
</style>
=======
   

    
  </VRow>

  <!-- 👉 Enable One Time Password Dialog -->
  <TwoFactorAuthDialog
    v-model:isDialogVisible="isTwoFactorDialogOpen"
    :sms-code="smsVerificationNumber"
  />
</template>
>>>>>>> 7962093 (Yhea-Team)
