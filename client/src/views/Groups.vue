<style scoped>
    .scroll {
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 765px;
    }

.scroll2 {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 760px;
}
</style>

<template>
  <v-card flat class="mt-n3 mb-n12">
    <v-row>
      <!-- Contact List -->
      <v-col cols="2">
        <v-toolbar class="align-center" color="light-blue darken-2" dark>
          <v-toolbar-title>
            <v-icon>mdi-contacts</v-icon>
            <span class="ml-6 text-center">Groups</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-content>
            <AddGroup/>
          </v-toolbar-content>
        </v-toolbar>
        <v-navigation-drawer class="scroll2" permanent color="grey lighten-5">
          <v-list nav >
            <v-list-item v-for="(group,index) in groups" :key="index" @click="select = group">
              <v-btn rounded text width="75%">
                <span>{{group.name}}</span>
              </v-btn>
              <v-spacer flat></v-spacer>
              <DeleteGroup :gDel="index"/>
            </v-list-item>
            <v-divider class="my-4"></v-divider>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="10">
        <v-card flat>
          <v-toolbar absolute width="99.9%">
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
                Posts
                <v-icon class="mx-3">mdi-post</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Events
                <v-icon class="mx-3">mdi-calendar</v-icon>
              </v-tab>

              <v-tab href="#tab-3">
                Members
                <v-icon class="mx-3">mdi-account-multiple</v-icon>
              </v-tab>

              <v-tabs-items v-model="tab">
                <v-tab-item value="tab-1" v-if="select != ''">
                  <v-card class="scroll mb-n12">
                    <GroupPosts :sel="select"/>
                  </v-card>
                  <div class="mb-n12">
                    <v-row class="justify-end" absolute>
                      <AddGroupPost :selD="select"/>
                    </v-row>
                  </div>
                </v-tab-item>

                <v-tab-item value="tab-2" v-if="select != ''">
                  <v-card class="mt-3">
                    <GroupEvents/>
                  </v-card>
                </v-tab-item>

                <v-tab-item value="tab-3" v-if="select != ''">
                  <v-card class="mb-n10">
                    <GroupMembers :g="select"/>
                  </v-card>
                  <div class="mb-n12 mr-12">
                    <v-row class="justify-center" absolute>
                      <AddMember />
                    </v-row>
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import GroupPosts from "@/components/GroupPosts";
import AddGroupPost from "@/components/AddGroupPost";
import AddGroup from "@/components/AddGroup";
import AddMember from "@/components/AddMember";
import DeleteGroup from "@/components/DeleteGroup";
import GroupEvents from "@/components/GroupEvents";
import GroupMembers from "@/components/GroupMembers";
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";

export default {
  name: 'Groups',
  components: {
    AddGroupPost,
    AddGroup,
    AddMember,
    DeleteGroup,
    GroupPosts,
    GroupEvents,
    GroupMembers
  },
  data() {
    return {
      tab: null,
      select: '',
      groups: []
    };
  },
  methods: {
    ...mapMutations(["setGroups", "removeToken"]),

  },
  computed: {
    ...mapGetters(["getToken", "getId"]),
  },
  mounted: function() {
      try {
        axios
          .get("http://localhost:1920/api/users/" + this.getId + "/groups", {
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
              this.groups = res.data
              this.setGroups(res.data)
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
};
</script>
