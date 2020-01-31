<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="750">
      <template v-slot:activator="{ on }">
            <v-btn
              color="grey lighten-4"
              light
              small
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
          Create a Group
        </v-card-title>

        <v-container>
        <v-text-field v-model="g_name" placeholder="Pick a name for your group...">
        </v-text-field>
        </v-container>
        

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          
          <v-btn
            color="light-blue darken-2"
            dark
            @click="createGroup"            
          >
            <div class="text-center">
            Post
            </div>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapGetters, mapMutations} from 'vuex'
  
  export default {
    data() {
      return {
        dialog: false,
        g_name: '',
      }
    },
    computed: mapGetters(["getToken", "getId"]),
    methods:{
      ...mapMutations(["removeToken","addGroup"]),

      createGroup() {
        axios({
            method: "POST",
            url: "http://localhost:1920/api/groups/",
            data: {
              admin: this.getId,
              name: this.g_name
            },
            headers: {
              Authorization: "Bearer " + this.getToken
            }
          }).then(res => {
            if (res.data.status == "ERROR INVALID TOKEN") {
              localStorage.removeItem("access_token");
              this.removeToken();
              this.$router.push("/");
            } else {
              this.addGroup(res.data)
            }
          })
          .catch(err => {
            console.log("Catch " + err);
          });
  
        this.dialog = false;
      },
    }
  }
</script>