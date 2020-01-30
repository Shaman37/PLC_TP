<template>
  <v-container>
    <v-container class="scroll5">
      <v-list two-line subheader>
        <v-card>
          <v-list-item v-for="(user,index) in this.pending" :key="index">
            <v-list-item-avatar color="red"></v-list-item-avatar>
                <img :src="'http://localhost:1920/api/users/' + user._id + '/photo'" />
            <v-list-item-content>
              <v-list-item-title>{{user.name}}</v-list-item-title>
            </v-list-item-content>
            <v-list-actions>
              <v-btn icon>
                <v-icon fab light color="green">mdi-check-circle</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon text fab light color="red">mdi-close-circle</v-icon>
              </v-btn>
              <v-btn icon>
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
export default {
  props: ["pending"]
};
</script>