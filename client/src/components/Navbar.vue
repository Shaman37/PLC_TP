<template>
  <nav>
    <!-- Top Bar -->
    <v-app-bar app flat clipped-left color="deep orange" dark class="white--text">
      <!-- Title -->
      <v-toolbar-title>
        <span class="text-uppercase font-weight-light">alumn</span>
        <span class="text-uppercase font-weight-bold">io</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Box -->
        <v-autocomplete v-if="this.$route.path!='/'"
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="Search Users"
          solo-inverted
          v-on:input="changeRoute(`${clicked._id}`)"
        ></v-autocomplete>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <!-- Profile -->
      <v-btn light small rounded router :to="'/profile'" v-if="loggedIn">Profile</v-btn>

      <v-divider class="mx-4" vertical v-if="loggedIn"></v-divider>

      <!-- Log Out -->
      <v-btn light fab x-small v-if="loggedIn" @click="logout">
        <v-icon>mdi-power</v-icon>
        <!--<span class="font-weight-light">Sign Out</span>-->
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      users: [],
      clicked: null
    };
  },

  computed: mapGetters(["loggedIn", "getToken"]),

  mounted: function() {
    try {
      axios
        .get("http://localhost:1920/api/users/", {
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
            this.users = res.data;
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
    ...mapMutations(["removeToken", "removeId"]),
    changeRoute(id) {
      this.$router.push({ path: "/users/" + id });
    },
    querySearch(v) {
      this.loading = true;

      setTimeout(() => {
        this.users.filter(u => {
          if (u.name.toLowerCase().includes(v)) {
            this.items = u.name;
            this.clicked = u;
          }
        });
        console.log(this.$route.path)

        this.loading = false;
      }, 500);
    },

    logout() {
      localStorage.removeItem("access_token");
      this.removeToken();
      localStorage.removeItem("current_user");
      this.removeId();
      this.$router.push("/");
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySearch(val);
    }
  }
};
</script>