<template>
  <v-app>

    <!-- App Layout -->
    <Navbar/>
    <Sidebar/>
    
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

export default {
  name: 'App',
  components: {Navbar,Sidebar},

  data: () => ({
  
  }),
};
</script>
