<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-8 ">
        <h1>Users list</h1>
        <table class="table">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
          </tr>
          </thead>
          <tbody>
          <template v-for="user in users">
            <tr>
              <th scope="row">{{user.id}}</th>
              <td>{{user.email}}</td>
            </tr>
          </template>
          </tbody>
        </table>
        <div v-if="loading">Загрузка...</div>
        <div v-if="error" class="error">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Users',
  props: {},
  data: function () {
    return {
      loading: false,
      users: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = this.users = null
      this.loading = true
      this.$http.get(window.location.origin + '/api/v1/users')
        .then(response => {
          this.loading = false
          return response.json()
        })
        .then((json) => {
          this.users = json
        }).catch((er) => {
          this.loading = false
          this.error = er.toString()
        })
    }
  }
}
</script>
