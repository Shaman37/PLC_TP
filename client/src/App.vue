<template>
  <v-app>

    <!-- App Layout -->
    <Navbar/>
    <Sidebar v-if="loggedIn"/>
    
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import {mapGetters} from "vuex";

export default {
  name: 'App',
  components: {Navbar,Sidebar},
  computed: mapGetters(["loggedIn"]),

  data: () => ({
  
  }),
};
</script>
