<template>
    <div>
        <v-card flat>
            <v-toolbar color="light-blue darken-2">
                <v-tabs v-model="tab" background-color="light-blue darken-2" centered grow dark slider-color="primary">
    
                    <v-tabs-slider></v-tabs-slider>
    
                    <v-tab href="#tab-1">
                        Friend List
                        <v-icon class="mx-3">mdi-format-list-checkbox</v-icon>
                    </v-tab>
    
                    <v-tab href="#tab-2">
                        Requests
                        <v-icon class="mx-3">mdi-account-plus</v-icon>
                    </v-tab>
    
                    <v-tabs-items v-model="tab">
                        <v-tab-item value="tab-1">
                        <v-conainer>
                            <FriendList/>
                        </v-conainer>
                        </v-tab-item>
    
                        <v-tab-item value="tab-2">
                            <Requests/>
                        </v-tab-item>
    
                    </v-tabs-items>
                </v-tabs>
            </v-toolbar>
        </v-card>
    </div>
</template>

<script>
    import Requests from '@/components/Requests'
    import FriendList from '@/components/FriendList'

    export default {
    components: {
        Requests, FriendList
    },
    data() {
      return {
        tab: null
      }
    }
    }
</script>