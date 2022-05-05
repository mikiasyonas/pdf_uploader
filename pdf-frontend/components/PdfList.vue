<template>
  <div>
    <OnePdf
      v-for="(item) in items"
      :key="item.id"
      :data="item"
      class="pt-5 pb-5 pl-5 pr-5"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PdfList',
  data () {
    return {
      items: []
    }
  },
  beforeMount () {
    axios({
      url: 'http://localhost:3000/pdf',
      method: 'GET',
      headers: {
        Authorization: 'Bearer example_token'
      }
    }).then((res) => {
      const data = res.data

      data.forEach((e) => {
        this.items.push({
          id: e.id,
          comment: e.comment,
          thumbnail: 'thumbnail-path',
          user: {
            name: 'Mikias Yonas',
            profilePic: 'user-profile-pic'
          }
        })
      })
    })
  }
}
</script>

<style>

</style>
