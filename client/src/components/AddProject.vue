<template>
  <div>
    <v-dialog v-model="dialog" width="750">
      <template v-slot:activator="{ on }">
            <v-btn
              color="light-blue darken-2"
              dark
              fab
              v-on="on"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
      </template>

      <v-card > 
        <v-card-title
          class="headline grey lighten-2 justify-center"
          primary-title
        >
          Add a Project
        </v-card-title>

        <v-container>
        <v-textarea label="Write something..." :auto-grow="true" solo>

        </v-textarea>
        </v-container>
        

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          
          <v-btn
            color="light-blue darken-2"
            dark
            @click="dialog = false"            
          >
            <div class="text-center">
            Create
            </div>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
      }
    },
  }
</script>