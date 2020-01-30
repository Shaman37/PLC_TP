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
            Friend List
            <v-icon class="mx-3">mdi-format-list-checkbox</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Requests
            <v-icon class="mx-3">mdi-account-plus</v-icon>
          </v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-1">
              <v-container>
                <FriendList :friends="this.friends"/>
              </v-container>
            </v-tab-item>

            <v-tab-item value="tab-2">
              <Requests :pending="this.pending"/>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
import Requests from "@/components/Requests";
import FriendList from "@/components/FriendList";
import { mapGetters } from "vuex";
import axios from 'axios'

export default {


  components: {
    Requests,
    FriendList
  },

  computed: mapGetters(["getToken", "getId"]),


  data() {
    return {
      tab: null,
      friends: [],
      pending: []
    };
  },

created: async function(){
    try{
        let response = await axios.get('http://localhost:1920/api/users/' + this.getId + '/friends',
        {headers: {
          Authorization: "Bearer " + this.getToken
        }})
        this.friends = response.data.friends
        console.log(this.friends)

        
        let response1 = await axios.get('http://localhost:1920/api/users/' + this.getId + '/pending',
        {headers: {
          Authorization: "Bearer " + this.getToken
        }})

        this.pending = response1.data.pending


    }
    catch(e){
        return e
    }
}


};
</script>