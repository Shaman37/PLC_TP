<style scoped>
.scroll {
  overflow-y: auto;
  max-height: 700px;
}
</style>

<template>
  <v-container>
    <v-container class="scroll5">
      <v-list two-line subheader>
        <v-card>
          <v-list-item v-for="(user,index) in this.pending" :key="index">
            <v-list-item-avatar color="red">
                <img :src="'http://localhost:1920/api/users/' + user._id + '/photo'" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{user.name}}</v-list-item-title>
            </v-list-item-content>
            <v-list-actions>
              <v-btn icon>
                <v-icon fab light color="green" @click="acceptFriend(user._id)">mdi-check-circle</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon text fab light color="red" @click="deleteRequest(user._id)">mdi-close-circle</v-icon>
              </v-btn>
              <v-btn icon @click="showUser(user._id)">
                <v-icon text fab light>mdi-arrow-right</v-icon>
              </v-btn>
            </v-list-actions>
          </v-list-item>
        </v-card>

        <v-divider class="my-4"></v-divider>
      </v-list>
    </v-container>
  </v-container>
</template>

<script>
import{mapGetters} from 'vuex'
import axios from 'axios'

export default {
  props: ["pending"],
  
  computed: mapGetters(["getToken", "getId"]),


  methods:{
    showUser: function(id){
        this.$router.push('users/' + id)
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