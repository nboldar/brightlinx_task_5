<template>
  <div class="container">
    <div class="row justify-content-center">
      <b-card class="col-md-6 justify-content-md-start" title="Registration form">
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <b-form-group
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
              :state="isRegistered"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
            <b-form-input
              @input="validatePassword"
              id="input-2"
              type="password"
              v-model="form.password"
              required
              placeholder="Enter password"
              :state="isPasswordValid"
            ></b-form-input>
            <b-form-invalid-feedback :state="isPasswordValid">
              Пароль должен быть минимум 6 символов, содержать цифры и спецсимволы
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="input-group-3" label="Repeat Your Password:" label-for="input-3">
            <b-form-input
              id="input-3"
              type="password"
              v-model="form.password_repeat"
              required
              placeholder="Repeat password"
              :state="isPasswordRepeatValid"
              @input="validatePasswordRepeat"
            ></b-form-input>
            <b-form-invalid-feedback :state="isPasswordRepeatValid">
              Пароли не совпадают
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            :state="state"
            required
          >
            I accept the terms and use
          </b-form-checkbox>
          <div class="row justify-content-between">
            <SubmitBtn :btn_sign="btn_sign1" :btn_class="btn_class1" :btn_type="btn_type1"></SubmitBtn>
            <SubmitBtn :btn_sign="btn_sign2" :btn_class="btn_class2" :btn_type="btn_type2"></SubmitBtn>
          </div>
        </b-form>
      </b-card>
    </div>
    <b-modal id="my-modal">Вы зарегистрированы, Ваш ID: {{user_id}}</b-modal>
  </div>
</template>

<script>
import SubmitBtn from '@/components/SubmitBtn.vue'

export default {
  name: 'Signup',
  components: {
    SubmitBtn
  },
  data () {
    return {
      user_id: null,
      isPasswordRepeatValid: null,
      isPasswordValid: null,
      isRegistered: null,
      btn_sign1: 'Подтвердить',
      btn_sign2: 'Очистить',
      btn_class1: 'primary',
      btn_class2: 'secondary',
      btn_type1: 'submit',
      btn_type2: 'reset',
      form: {
        email: '',
        password: '',
        password_repeat: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('http://localhost:4040/signup', {
        email: this.form.email,
        password: this.form.password
      }).then((response) => {
        return response.json()
      }).then(json => {
        this.isRegistered = json.isRegistered;
        if (this.isRegistered) {
          this.$bvModal.show('my-modal')
        }
        this.user_id = json.user_id
      }).catch(error => {
        this.isRegistered = false;
        console.log('Произошла ошибка с ajax запросом на регистрацию: ' + error.message)
      })
    },
    onReset () {
      this.form.email = ''
      this.form.password = ''
      this.form.password_repeat = ''
      this.isRegistered = null
    },
    validatePassword () {
      let pattern = new RegExp('[0-9a-zA-Z!@#$%^&*]{6,}')
      this.isPasswordValid = pattern.test(this.form.password)
    },
    validatePasswordRepeat () {
      this.isPasswordRepeatValid = this.form.password === this.form.password_repeat
    }
  },
  computed: {
    state () {
      return this.value
    }
  }
}
</script>

<style scoped>

</style>
