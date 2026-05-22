<script setup>
import {reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "@/stores/authStore.js";
import AppButton from "@/components/ui/AppButton.vue";

const user = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

async function handleSubmit() {
//   logjika per submit
  if (!user.email || !user.password) {
    alert('Please fill in all fields')
    return
  }

  try {
    loading.value = true
    await authStore.logIn(user.email, user.password)
    const redirectUrl = `${route.query?.redirect || '/'}`
    await router.push(redirectUrl)
  } catch (e) {
    console.error(e)
    alert('Login failed. Please check your credentials and try again.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div id="auth">
    <div class="row h-100">
      <div class="col-lg-5 col-12">
        <div id="auth-left">
          <div class="auth-logo">
          </div>
          <h1 class="auth-title">Log in.</h1>
          <p class="auth-subtitle mb-5"></p>

          <form @submit.prevent="handleSubmit">
            <div class="form-group position-relative has-icon-left mb-4">
              <input
                  type="email"
                  class="form-control form-control-xl"
                  placeholder="Email"
                  v-model.trim="user.email"
              >
              <div class="form-control-icon">
                <i class="bi bi-person"></i>
              </div>
            </div>
            <div class="form-group position-relative has-icon-left mb-4">
              <input
                  type="password"
                  class="form-control form-control-xl"
                  placeholder="Password"
                  v-model.trim="user.password"
              >
              <div class="form-control-icon">
                <i class="bi bi-shield-lock"></i>
              </div>
            </div>
            <div class="form-check form-check-lg d-flex align-items-end">
              <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label text-gray-600" for="flexCheckDefault">
                Keep me logged in
              </label>
            </div>
<!--            <button class="btn btn-primary" type="button" disabled v-if="loading">-->
<!--              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>-->
<!--              Log in...-->
<!--            </button>-->
<!--            <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5" v-else>Log in</button>-->
<!--            <AppButton class="btn btn-primary btn-block btn-lg shadow-lg mt-5" :loading>-->
            <AppButton class="btn btn-primary btn-block btn-lg shadow-lg mt-5" :loading="loading">
<!--             Log in zevendesohet te slot-i -->
              Log in
            </AppButton>
          </form>
        </div>
      </div>
      <div class="col-lg-7 d-none d-lg-block">
        <div id="auth-right"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #fff
}

#auth {
  height: 100vh;
  overflow-x: hidden
}

#auth #auth-right {
  background: url(../../assets/images/bg/4853433.png), linear-gradient(90deg, #2d499d, #3f5491);
  height: 100%
}

#auth #auth-left {
  padding: 5rem 8rem
}

#auth #auth-left .auth-title {
  font-size: 4rem;
  margin-bottom: 1rem
}

#auth #auth-left .auth-subtitle {
  color: #a8aebb;
  font-size: 1.7rem;
  line-height: 2.5rem
}

#auth #auth-left .auth-logo {
  margin-bottom: 7rem
}

#auth #auth-left .auth-logo img {
  height: 2rem
}

@media screen and (max-width: 767px) {
  #auth #auth-left {
    padding: 5rem
  }
}

@media screen and (max-width: 576px) {
  #auth #auth-left {
    padding: 5rem 3rem
  }
}
</style>