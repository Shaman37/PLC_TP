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

          <v-tab href="#tab-2" v-if="isFriend(user.friends)">
            Posts
            <v-icon class="mx-3">mdi-account-post</v-icon>
          </v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-1">
              <v-card class="scroll">
                <v-row class="text-center">
                  <v-col cols="12">
                    <v-avatar color="grey" size="256">
                      <img :src="'http://localhost:1920/api/users/' + user._id + '/photo'" />
                    </v-avatar>

                    <v-col cols="12">
                      <v-text class="pt-12 display-3">{{user.name}}</v-text>
                      <br />
                      <v-text class="font-italic subtitle-1 font-weight-light">{{user.course}}</v-text>
                    </v-col>

                    <div v-if="!isFriend(user.friends) && !isPending(user.pending) && !ismyPending(user._id)">
                    <v-divider class="pt-6 mx-12"></v-divider>
                  <v-btn rounded large :disabled="disable" class="pt-3" color="light-blue darken-2" @click="friendRequest(user._id)">
                    <v-icon text fab light color="white" large>mdi-account-plus</v-icon>
                  </v-btn>
                    </div>

                    <div v-if="isPending(user.pending)">
                    <v-divider class="pt-6 mx-12"></v-divider>
                  <v-btn disabled rounded large class="pt-3" color="light-blue darken-2">
                    <v-icon text fab light color="white" large>mdi-account-plus</v-icon>
                  </v-btn>
                    </div>

                  <div v-if="ismyPending(user._id) && !isFriend(user.friends)">
                    <v-divider class="pt-6 mx-12"></v-divider>
                  <v-btn icon>
                    <v-icon text fab light color="green" large @click="acceptFriend(user._id)">mdi-check-circle</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon text fab light color="red" large @click="deleteRequest(user._id)">mdi-close-circle</v-icon>
                  </v-btn>
                    </div>


                  </v-col>
                  <v-divider class="pt-6 mx-12"></v-divider>
                  


                  <v-col cols="12">
                    <v-text class="body-1 pa-12">{{user.biography}}</v-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>

            <v-tab-item value="tab-2" v-if="isFriend(user.friends)">
              <v-card class="scroll mb-n12">
                <UserFeed :id="user._id" />
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
import UserFeed from "@/components/UserFeed";

export default {
  name: "UserPage",
  components: {
    UserFeed
  },
  data() {
    return {
      tab: null,
      user: {},
      disable: false
    };
  },
  computed: mapGetters(["getToken", "getId"]),

  mounted: function() {
    try {
      axios
        .get("http://localhost:1920/api/users/" + this.$route.params.idUser, {
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
  },
  methods: {
    isFriend: function(friends) {
      console.log(this.getId);
      if (friends.filter(a => a == this.getId).length > 0) return true;
      return false;
    },

    isPending: function(pending) {
      console.log(this.getId);
      if (pending.filter(a => a == this.getId).length > 0) return true;
      return false;
    },

    ismyPending: async function(id) {

      let response = await axios.get("http://localhost:1920/api/users/" + this.getId + '/pending', {
          headers: {
            Authorization: "Bearer " + this.getToken
          }
      })
      console.log(response)
      if (response.data.pending.filter(a => a == id).length > 0) return true;
      return false;
    },

    friendRequest:  function(userId){
        axios({
        method: "POST",
        url: "http://localhost:1920/api/users/" + userId + "/request",
        data: {
          idRequest: this.getId
        },
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      })
        .then(res => {
          if (res.data.status == "ERROR INVALID TOKEN") {
            localStorage.removeItem("access_token");
            this.removeToken();
            this.$router.push("/");
          }else{
            this.disable = true
          }
        })
        .catch(err => {
          console.log("Catch " + err);
        });
    },
    acceptFriend: function(id){
        
      axios({
        method: "POST",
        url: "http://localhost:1920/api/users/" + this.getId + "/friends",
        data: {
          idRequest: id
        },

        headers: {
          Authorization: "Bearer " + this.getToken
        }
      })
        .then(res => {
          if (res.data.status == "ERROR INVALID TOKEN") {
            localStorage.removeItem("access_token");
            this.removeToken();
            this.$router.push("/");
          }
        })
        .catch(err => {
          console.log("Catch " + err);
        });

      this.dialog = false;
    
    },
    deleteRequest: function(id){
        
      axios({
        method: "DELETE",
        url: "http://localhost:1920/api/users/" + this.getId + "/request",
        data: {
          idRequest: id
        },
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      })
        .then(res => {
          if (res.data.status == "ERROR INVALID TOKEN") {
            localStorage.removeItem("access_token");
            this.removeToken();
            this.$router.push("/");
          }
        })
        .catch(err => {
          console.log("Catch " + err);
        });

      this.dialog = false;
    
    }
  }
};
</script>