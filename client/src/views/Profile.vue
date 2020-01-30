<style scoped>
    .scroll {
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 765px;
    }
</style>

<template>
  <div>
    <v-card flat>
      <v-toolbar color="light-blue darken-2">
        <v-tabs
          v-model="tab"
          background-color="light-blue darken-2"
          centered
          grow
          dark
          slider-color="primary"
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Description
            <v-icon class="mx-3">mdi-account-badge-horizontal</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Posts
            <v-icon class="mx-3">mdi-account-post</v-icon>
          </v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-1">
              <v-card class="scroll">
                <v-row class="text-center">
                  <v-col cols="12">
                    <v-avatar color="green" size="256">
                      <img :src="'http://localhost:1920/api/users/' + this.getId + '/photo'" />
                    </v-avatar>

                    <v-col cols="12">
                      <v-text class="pt-12 display-3">{{user.name}}</v-text>
                      <br />
                      <v-text class="font-italic subtitle-1 font-weight-light">{{user.course}}</v-text>
                    </v-col>

                    <v-divider class="pt-6 mx-12"></v-divider>
                  </v-col>

                  <v-col cols="12">
                    <v-text class="body-1 pa-12">{{user.biography}}</v-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>

            <v-tab-item value="tab-2">
              <v-card class="scroll mb-n12">
                <Feed/>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Feed from "@/components/Feed";


export default {
  components: {
    Feed
  },
  data() {
    return {
      tab: null,
      user: {}
    };
  },
  computed: mapGetters(["getToken", "getId"]),

  mounted: function() {
    try {
      axios
        .get("http://localhost:1920/api/users/" + this.getId, {
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
            console.log(res.data);
            this.user = res.data;
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