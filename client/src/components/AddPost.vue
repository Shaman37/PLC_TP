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
          Write a Post
        </v-card-title>

        <v-container>
        <v-textarea label="Write something..." :auto-grow="true" solo v-model="post">

        </v-textarea>
        </v-container>
        

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          
          <v-btn
            color="light-blue darken-2"
            dark
            @click="createPost" 
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
  import {
    mapGetters,
    mapMutations
  } from "vuex";
  
  export default {
    name: "AddPost",
    data() {
      return {
        dialog: false,
        post: ''
      }
    },
    computed: {
      ...mapGetters(["getToken", "getId", "getPosts"]),
    },
    methods: {
      ...mapMutations(["setToken", "setId", "addPost"]),
  
      createPost() {
      
        axios({
            method: "POST",
            url: "http://localhost:1920/api/posts",
            data: {
              text: this.post,
              author: this.getId
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
              console.log(res.data)
              this.addPost(res.data);
            }
          })
          .catch(err => {
            console.log("Catch " + err);
          });

          this.dialog = false;
      }
    },
  }
</script>