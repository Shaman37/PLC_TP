<template>
  <div>
    <v-card flat>
      <v-toolbar absolute width="99.9%">
        <v-tabs v-model="tab" background-color="light-blue darken-2" centered grow dark slider-color="primary">
  
          <v-tabs-slider></v-tabs-slider>
  
          <v-tab href="#tab-1">
            Classes
            <v-icon class="mx-3">mdi-format-list-bulleted</v-icon>
          </v-tab>
  
          <v-tab href="#tab-2">
            Projects
            <v-icon class="mx-3">mdi-folder-outline</v-icon>
          </v-tab>
  
          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-1">
              <v-card>
                <Classes/>
              </v-card>
            </v-tab-item>
  
            <v-tab-item value="tab-2">
              <v-card class="scroll2">
                <Projects/>
              </v-card>
            </v-tab-item>
  
          </v-tabs-items>
        </v-tabs>
      </v-toolbar>
    </v-card>
  
  </div>
</template>

<script>
  import Classes from '@/components/Classes'
  import Projects from '@/components/Projects'
  
  export default {
    components: {
      Classes,
      Projects
    },
    data() {
      return {
        tab: null
      }
    }
  }
</script>