<template>
  <b-col lg="4">
    <b-button :type=btn_type :variant=btn_class>{{btn_sign}}</b-button>
  </b-col>
</template>

<script>
export default {
  name: 'SubmitBtn',
  props: {
    btn_sign: String,
    btn_class: String,
    btn_type: String
  }
}
</script>

<style scoped>

</style>
