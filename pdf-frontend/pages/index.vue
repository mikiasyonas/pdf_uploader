<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-btn class="accent" @click="login('user')">
        Login As User
      </v-btn>

      <v-btn class="accent" @click="login('admin')">
        Login As Admin
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    if (localStorage.getItem('role')) {
      // Push user to dashboard
      this.$router.push({
        name: 'DashBoard'
      })
    }
  },
  methods: {
    login (role) {
      localStorage.setItem('role', role)

      this.$router.push({
        name: 'DashBoard'
      })
    }
  }
}
</script>
