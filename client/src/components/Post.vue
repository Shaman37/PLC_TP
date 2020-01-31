<template>
  <v-card>
    <v-expansion-panels>
      <v-expansion-panel v-for="(post,index) in posts" :key="index">
        <v-expansion-panel-header>
          <v-card class="mt-3">
            <v-card-title>
              <v-avatar size="52" color="grey">
                <img :src="'http://localhost:1920/api/users/' + post.author._id + '/photo'" alt="" />
              </v-avatar>

              <v-card-subtitle
                class="title font-weight-medium pl-5"
              >{{post.author.name}}</v-card-subtitle>

              <v-spacer></v-spacer>

              <v-card-subtitle class="overline" justify-end v-model="post_date">{{post.date}}</v-card-subtitle>

              <v-divider class="ml-3" vertical></v-divider>

              <v-btn icon>
                <v-icon right>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon right>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="ml-7" v-model="post_text">{{post.text}}</v-card-text>
          </v-card>
        </v-expansion-panel-header>

        <v-divider></v-divider>

        <v-expansion-panel-content>
          <!-- Comments -->
          <v-container>
            <v-row wrap class="align-center" justify-center>
              <v-col cols="1">
                <div class="text-center">
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
              </v-col>
              <v-col cols="11">
                <v-card color="grey lighten-4">
                  <v-card-title>
                    <v-avatar color="green" size="32">
                      <img src="../assets/logo.png" />
                    </v-avatar>

                    <span class="font-weight-regular pl-5 subtitle-1">João Leal</span>

                    <v-spacer></v-spacer>

                    <span class="overline">24/01/2020</span>

                    <v-divider class="ml-3" vertical></v-divider>

                    <v-btn icon>
                      <v-icon right>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon right>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-card-title>

                  <v-divider></v-divider>
                  <v-card-text class="ml-7">Elit sint eu aliquip culpa eu labore.</v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row wrap class="justify-center mb-n10">
              <v-col cols="11">
                <v-text-field
                  v-model="comment"
                  :append-outer-icon="comment ? 'mdi-send' : ''"
                  color="light-blue darken-1"
                  rounded
                  filled
                  outlined
                  clear-icon="mdi-close-circle"
                  clearable
                  type="text"
                  label="Comment"
                  placeholder="Write a comment..."
                  @click:append-outer="sendMessage"
                  @click:clear="clearMessage"
                  @keydown.enter="sendMessage"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-divider class="my-4"></v-divider>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      comment: "",
      name: "",
      post_date: "",
      post_text: "",
      posts: []
    };
  },
  computed: mapGetters(["getToken", "getId", "getPosts"]),

  methods: {
    ...mapMutations(["setPosts"]),
    sendMessage() {
      if (this.comment) this.clearMessage();
    },
    clearMessage() {
      this.comment = "";
    }
  },
  mounted: function() {
    try {
      axios
        .get("http://localhost:1920/api/users/" + this.getId + "/posts", {
          headers: {
            Authorization: "Bearer " + this.getToken
          }
        })
        .then(res => {
          if (res.data.status == "ERROR INVALID TOKEN") {
            localStorage.removeItem("access_token");
            this.removeToken();
            this.$router.push("/");
          } else {
            this.posts = res.data.feed;
            this.setPosts(res.data.feed);
          }
        })
        .catch(err => {
          console.log("Catch " + err);
        });
    } catch (e) {
      console.log("ERROR: " + e);
      return e;
    }
  }
};
</script>