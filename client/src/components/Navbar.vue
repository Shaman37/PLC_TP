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
            <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search" v-if="loggedIn" />
    
            <v-spacer></v-spacer>
    
            <v-spacer></v-spacer>
    
            <!-- Profile -->
            <v-btn light small rounded router :to="'/profile'" v-if="loggedIn">
                Profile
            </v-btn>
    
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
    import {
        mapGetters,
        mapMutations
    } from "vuex";
    
    export default {
        computed: mapGetters(["loggedIn"]),
        methods: {
            ...mapMutations(["removeToken","removeId"]),
    
            logout() {
                localStorage.removeItem("access_token");
                this.removeToken();
                localStorage.removeItem("current_user");
                this.removeId();
                this.$router.push("/");
            }
        }
    }
</script>