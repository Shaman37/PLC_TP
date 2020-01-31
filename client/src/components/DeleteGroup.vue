<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="750">
      <template v-slot:activator="{ on }">
            <v-btn
              text
              light
              fab
              v-on="on"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
      </template>

      <v-card > 
        <v-card-title
          class="headline grey lighten-2 justify-center"
          primary-title
        >
          Eliminate Group
        </v-card-title>

        <v-container>
        <v-row class="justify-center">
        <v-col cols="6">
            <span>Are you sure you want to erase this group?</span>
        </v-col>
        </v-row>
        </v-container>
        

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          
          <v-btn
            color="light-blue darken-2"
            dark
            @click="deleteGroup(gDel)"            
          >
            <div class="text-center">
            Remove
            </div>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapGetters,mapMutations} from 'vuex'

  export default {
    name: 'DeleteGroup',
    props: ['gDel'],
    data() {
      return {
        dialog: false,
      }
    },
    computed: mapGetters(["getGroups"]),
    methods:{
      ...mapMutations([ "removeToken", "removeGroup"]),
      deleteGroup(index) {
        axios({
            method: "DELETE",
            url: "http://localhost:1920/api/groups/" + this.getGroups[index]._id,
            data: {
              idGroup: this.getGroups[index]._id
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
                  this.removeGroup(index)
                  
                }
              })
            .catch(err => {
              console.log("Catch " + err);
            });
            this.dialog = false
          },
    }
  }
</script>