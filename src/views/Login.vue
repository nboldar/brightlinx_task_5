<template>
  <div class="container">
    <div class="row justify-content-center">
      <b-card class="col-md-6 justify-content-md-start" title="Для авторизации введите Email и пароль">
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <b-form-group
            class="align-content-end "
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="Enter your email in format user@domain.com"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
              :state="isAuthorized"
            ></b-form-input>

          </b-form-group>

          <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.password"
              required
              placeholder="Enter password"
              :state="isAuthorized"
            ></b-form-input>
            <b-form-invalid-feedback :state="isAuthorized">
              неправильный логин или пароль
            </b-form-invalid-feedback>
          </b-form-group>
          <div class="row justify-content-between">
            <SubmitBtn :btn_sign="btn_sign1" :btn_class="btn_class1" :btn_type="btn_type1"></SubmitBtn>
            <SubmitBtn :btn_sign="btn_sign2" :btn_class="btn_class2" :btn_type="btn_type2"></SubmitBtn>
          </div>
        </b-form>
      </b-card>
    </div>
    <b-modal id="my-modal">Авторизация прошла успешно!!!!</b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import SubmitBtn from '@/components/SubmitBtn.vue'

export default {
  name: 'Login',
  components: {
    SubmitBtn
  },
  data () {
    return {
      isAuthorized: null,
      btn_sign1: 'Подтвердить',
      btn_sign2: 'Очистить',
      btn_class1: 'primary',
      btn_class2: 'secondary',
      btn_type1: 'submit',
      btn_type2: 'reset',
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$http.post(window.location.origin + '/api/v1/login', {
        email: this.form.email,
        password: this.form.password
      }).then((response) => {
        return response.json()
      }).then(json => {
        this.isAuthorized = json.isAuthorized
        if (this.isAuthorized) {
          this.$bvModal.show('my-modal')
        }
        console.log(this.isAuthorized)
      }).catch(error => {
        this.isAuthorized = false
        console.log('Произошла ошибка с ajax запросом на авторизацию: ' + error.message)
      })
    },
    onReset () {
      this.form.email = ''
      this.form.password = ''
      this.isAuthorized = null
    }
  }
}
</script>

<style scoped>

</style>
