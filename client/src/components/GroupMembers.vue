<style scoped>
.scroll {
  overflow-y: auto;
  max-height: 700px;
}
</style>

<template>
  <div>
    <v-container>
      <v-responsive :aspect-ratio="16/9">
        <v-toolbar absolute width="100%">
          <v-tabs
            grow
            v-model="tab"
            background-color="light-blue darken-4"
            centered
            dark
            slider-color="primary"
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1">
              Active
              <v-icon class="mx-3">mdi-format-list-checkbox</v-icon>
            </v-tab>

            <v-tab href="#tab-2" v-if="isAdmin(g)">
              Pending
              <v-icon class="mx-3">mdi-clock-outline</v-icon>
            </v-tab>

            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-1">
                <v-container class="scroll">
                  <v-list two-line subheader>
                    <v-card>
                      <v-list-item v-for="(m,index) in g.admin" :key="index">
                        <v-list-item-avatar color="green"></v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>{{m.name}}</v-list-item-title>
                          <v-list-item-subtitle>Admin</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-actions>
                          <v-btn icon @click="showUser(m._id)">
                            <v-icon text fab light >mdi-arrow-right</v-icon>
                          </v-btn>
                        </v-list-actions>
                      </v-list-item>
                    </v-card>

                    <v-divider class="my-4"></v-divider>
                  </v-list>
                  <v-list two-line subheader>
                    <v-card>
                      <v-list-item v-for="(m,index) in g.members" :key="index">
                        <v-list-item-avatar color="green"></v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>{{m.name}}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-actions>
                          <v-btn icon v-if="isAdmin(g)">
                            <DeleteMember :gId="g._id" :uId="m._id" />
                          </v-btn>
                          <v-btn icon @click="showUser(m._id)">
                            <v-icon text fab light >mdi-arrow-right</v-icon>
                          </v-btn>
                        </v-list-actions>
                      </v-list-item>
                    </v-card>

                    <v-divider class="my-4"></v-divider>
                  </v-list>
                </v-container>
              </v-tab-item>

              <v-tab-item value="tab-2">
                <v-container class="scroll">
                  <v-list two-line subheader>
                    <v-card>
                      <v-list-item v-for="(m,index) in g.pending" :key="index">
                        <v-list-item-avatar color="red"></v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>{{m.name}}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-actions>
                          <v-btn icon>
                            <v-icon fab light color="green" @click="addMember(g._id,m._id)">mdi-check-circle</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon text fab light color="red">mdi-close-circle</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon text fab light @click="showUser(m._id)">mdi-arrow-right</v-icon>
                          </v-btn>
                        </v-list-actions>
                      </v-list-item>
                    </v-card>

                    <v-divider class="my-4"></v-divider>
                  </v-list>
                </v-container>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </v-toolbar>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>
import DeleteMember from "@/components/DeleteMember";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "GroupMembers",
  props: ["g"],
  components: {
    DeleteMember
  },
  data() {
    return {
      tab: null
    };
  },
  computed: mapGetters(["getToken", "getId"]),

  methods: {
    isAdmin(g) {
      if (g.admin.filter(a => a._id == this.getId).length > 0) return true;
      return false;
    },

    addMember(idGroup, idMember) {
      axios({
        method: "POST",
        url: "http://localhost:1920/api/groups/" + idGroup + "/members",
        data: {
          userId: idMember
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
      showUser: function(id){
          this.$router.push('users/' + id)
      }
  }
};
</script>