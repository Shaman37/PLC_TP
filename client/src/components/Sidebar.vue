<template>
  <div>
    <!-- Side Drawer -->
    <v-navigation-drawer clipped permanent app v-model="drawer" width="275" color="grey lighten-4">
      <v-row class="text-center">
        <v-col cols="12" class="mt-10">
          <v-card>
            <v-card-text>
              <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn color="light-blue darken-2" @click="submitFile">Submit</v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>

          <v-avatar size="175" color="grey">
            <img :src="'http://localhost:1920/api/users/' + this.getId + '/photo'" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">{{user.name}}</v-list-item-title>
              <v-list-item-subtitle class="mt-2 text-wrap">{{user.course}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-divider class="mt-2"></v-divider>

      <v-list nav rounded class="mt-3">
        <v-list-item link router :to="'/dashboard'">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item link router :to="'/friends'">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Friends</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item link router :to="'/groups'">
          <v-list-item-icon>
            <v-icon>mdi-google-circles-extended</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Groups</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item link router :to="'/course'">
          <v-list-item-icon>
            <v-icon>mdi-school</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Course</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item link router :to="'/album'">
          <v-list-item-icon>
            <v-icon>mdi-image</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Photo Album</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      drawer: true,
      user: {},
      photo: "",
      file: ""
    };
  },

  computed: mapGetters(["getToken", "getId"]),
  methods: {
    submitFile() {
      let formData = new FormData();

      formData.append("file", this.file);
      axios
        .post(
          "http://localhost:1920/api/users/" + this.getId + "/photo",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  },

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