<template>
  <div>
    <v-stepper v-model="step" alt-labels class="ml-10 mr-10">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1">
          Upload
        </v-stepper-step>

        <v-divider />

        <v-stepper-step :complete="step > 2" step="2">
          Review And Submit
        </v-stepper-step>

        <v-divider />

        <v-stepper-step :complete="step > 3" step="3">
          Confirmation
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>

    <v-main v-if="uploadSubmitted" class="main d-flex align-center justify-center">
      <v-card class="mr-10 ml-10">
        <v-row class="pl-15 pr-15 pt-10 pb-10 d-flex align-center justify-center">
          <v-col>
            <img
              :src="require(`~/assets/img/bg-auth.jpg`)"
              height="500"
              width="300"
            >
          </v-col>
          <v-col>
            <p>Add a comment (optional)</p>
            <v-textarea
              v-model="comment"
              solo
              name="input-7-4"
              label="Solo textarea"
            />

            <v-btn class="accent" @click="submit">
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
    <v-main v-else-if="uploaded" class="main d-flex align-center justify-center">
      <v-btn icon>
        <v-icon @click="deletePdf(pdfDetail.id)">
          mdi-done
        </v-icon>
      </v-btn>
      <p>Document Uploaded Successfully</p>

      <v-btn class="accent">
        <NuxtLink to="/dashboard" class="white--text link">
          TO THE LIST
        </NuxtLink>
      </v-btn>
    </v-main>
    <v-main v-else>
      <p>Document</p>
      <v-row>
        <v-col>
          <v-file-input
            v-model="pdfFile"
            accept=".pdf"
            label="Upload file"
            show-size
            counter
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-btn class="accent" @click="uploadPdf">
            Upload
          </v-btn>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      step: 1,
      pdfFile: null,
      uploadSubmitted: false,
      uploaded: false,
      pdfUrl: '',
      comment: ''
    }
  },
  methods: {
    uploadPdf () {
      if (this.pdfFile) {
        this.uploadSubmitted = true

        this.step = 2
      }
    },
    submit () {
      const formData = new FormData()

      formData.append('file', this.pdfFile)
      formData.append('comment', this.comment)

      axios({
        url: 'http://localhost:3000/pdf',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer example_token'
        }
      }).then((res) => {
        this.uploadSubmitted = false
        this.uploaded = true
        this.step = 3
      })
    }
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>>
