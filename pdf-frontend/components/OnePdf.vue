<template>
  <v-card class="mt-5 mb-8">
    <v-row justify="center" align="center">
      <v-col>
        <img
          :src="require(`~/assets/img/bg-auth.jpg`)"
          height="200"
          width="170"
        >
      </v-col>
      <v-col>
        <div class="d-flex align-center">
          <img
            :src="require(`~/assets/img/bg-auth.jpg`)"
            height="50"
            width="50"
            class="rounded-circle mr-3"
          >

          <div>
            {{ pdfDetail.user.name }}
          </div>
        </div>
      </v-col>
      <v-col>
        {{ pdfDetail.comment }}
      </v-col>
      <v-btn v-if="checkAdmin" icon>
        <v-icon @click="deletePdf(pdfDetail.id)">
          mdi-delete
        </v-icon>
      </v-btn>
    </v-row>

    <v-snackbar
      v-model="snackbar"
    >
      Item Deleted

      <template #action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  props: ['data'],
  data () {
    return {
      pdfDetail: this.data,
      deleted: false,
      snackbar: false
    }
  },
  methods: {
    deletePdf (id) {
      axios({
        url: `http://localhost:3000/pdf/${this.pdfDetail.id}`,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer example_token'
        }
      }).then((res) => {
        this.snackbar = true
        setTimeout(() => {
          this.$destroy()

          // remove the element from the DOM
          this.$el.parentNode.removeChild(this.$el)
        }, 2000)
      })
    },
    checkAdmin () {
      if (localStorage.getItem('role') === 'admin') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.card {
  margin: 2rem;
}
</style>
