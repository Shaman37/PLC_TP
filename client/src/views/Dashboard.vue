<style>
    .scroll2 {
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 765px;
    }
</style>

<template>
  <div>
    <v-card flat>
      <v-toolbar absolute width="99.9%">
      <v-tabs v-model="tab" background-color="light-blue darken-2" centered grow dark slider-color="primary">
  
        <v-tabs-slider></v-tabs-slider>
  
        <v-tab href="#tab-1">
          Feed
          <v-icon class="mx-3">mdi-post</v-icon>
        </v-tab>
  
        <v-tab href="#tab-2">
          Chat
          <v-icon class="mx-3">mdi-message</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          Events
          <v-icon class="mx-3">mdi-calendar</v-icon>
        </v-tab>
  
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
          <v-card class="scroll2 mb-n12">
          <Post/>
          </v-card >
          <div class="mb-n12">
          <v-row class="justify-center" absolute>
          
          <AddPost/>
          
          </v-row>
          </div>
          </v-tab-item>
  
          <v-tab-item value="tab-2">
          <Chat/>
          </v-tab-item>

          <v-tab-item value="tab-3">
            <v-card class="mt-3">
            <Events/>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
      </v-toolbar>
    </v-card>
      
  </div>
</template>

<script>
  import Post from '@/components/Post'
  import Chat from '@/components/Chat'
  import Events from '@/components/Events'
  import AddPost from '@/components/AddPost'

  export default {
    name: "dashboard",
    components: {
      Post,
      AddPost,
      Chat,
      Events
    },
    data() {
      return {
        tab: null
      }
    }
  }
</script>