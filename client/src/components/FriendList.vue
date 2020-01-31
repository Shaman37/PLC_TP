<style scoped>
    .scroll {
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 765px;
    }
</style>

<template>
  <v-row>
    <v-col cols="12">
      <v-card class="scroll2">
        <v-row>
          <v-col
            v-for="(friend,index) in this.friends"
            :key="index"
            class="d-flex child-flex"
            cols="4"
          >
            <v-card class="d-flex mx-2">
              <v-row>
                <v-col cols="4">
                  <v-avatar size="120" color="grey" class="ml-3">
                    <img :src="'http://localhost:1920/api/users/' + friend._id + '/photo'" />
                  </v-avatar>
                </v-col>

                <v-col cols="8">
                  <v-row class="justify-center text-center">
                    <v-col cols="12">
                      <v-card-text class="mx-4 title">{{friend.name}}</v-card-text>
                    </v-col>
                    <v-col cols="12">
                      <v-card-text class="mx-4 subheader text-wrap">{{friend.course}}</v-card-text>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                </v-col>

                <v-col cols="12" class="mx-4 text-wrap">
                  <v-card-text>{{friend.biography}}</v-card-text>
                </v-col>

                <v-col cols="12" class="text-center">
                  <v-divider></v-divider>
                  <v-btn icon class="pt-3" @click="showUser(friend._id)">
                    <v-icon text fab light>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FriendList',
  props: ["friends"],
  methods:{
      showUser: function(id){
          this.$router.push('users/' + id)
      }
  }


};
</script>