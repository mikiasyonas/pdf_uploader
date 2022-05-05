<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <PdfList />
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted () {
    if (!localStorage.getItem('role')) {
      this.$router.push({
        name: 'index'
      })
    }
  }
}
</script>

<style>

</style>
