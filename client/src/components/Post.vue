<template>
    <v-container>
        <div v-for="post in posts" :key="post._id">
            <v-card class="mt-3">
                <v-card-title>
                    <v-avatar color="indigo" size="52">
                        <img src="../assets/logo.png">
                    </v-avatar>
    
                    <v-card-subtitle class="title font-weight-medium pl-5" v-model="author">{{post.author}}</v-card-subtitle>
    
                    <v-spacer></v-spacer>
    
                    <v-card-subtitle class="overline" justify-end v-model="post_date">{{post.date}}</v-card-subtitle>
    
                    <v-divider class="ml-3" vertical></v-divider>
    
                    <v-btn icon>
                        <v-icon right>mdi-heart</v-icon>
                    </v-btn>
    
                    <v-btn icon>
                        <v-icon right>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-card-title>
    
                <v-divider></v-divider>
                <v-card-text class="ml-7" v-model="post_text">
                {{post.text}}
                </v-card-text>
    
                <v-card-actions class="justify-center">
    
                    <v-btn @click="show = !show" icons-and-text color="grey lighten-3">
                        <v-icon>{{show ? 'mdi-chevron-up' : 'mdi-chevron-down'}}</v-icon>
                        Comments
                    </v-btn>
                </v-card-actions>
    
                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>
    
                        <!-- Comments -->
                        <v-container>
                            <v-row wrap class="align-center" justify-center>
    
                                <v-col cols="1">
                                    <div class="text-center">
                                        <v-icon>mdi-chevron-right</v-icon>
                                    </div>
                                </v-col>
                                <v-col cols="11">
                                    <v-card color="grey lighten-4">
                                        <v-card-title>
                                            <v-avatar color="green" size="32">
                                                <img src="../assets/logo.png">
                                            </v-avatar>
    
                                            <span class="font-weight-regular pl-5 subtitle-1">João Leal</span>
    
                                            <v-spacer></v-spacer>
    
                                            <span class="overline">24/01/2020</span>
    
                                            <v-divider class="ml-3" vertical></v-divider>
    
                                            <v-btn icon>
                                                <v-icon right>mdi-heart</v-icon>
                                            </v-btn>
    
                                            <v-btn icon>
                                                <v-icon right>mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        </v-card-title>
    
                                        <v-divider></v-divider>
                                        <v-card-text class="ml-7">
                                            Elit sint eu aliquip culpa eu labore.
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
    
    
                            <v-row wrap class="justify-center mb-n10">
                                <v-col cols="11">
                                    <v-text-field v-model="comment" :append-outer-icon="comment ? 'mdi-send' : ''" color="light-blue darken-1" rounded filled outlined clear-icon="mdi-close-circle" clearable type="text" label="Comment" placeholder="Write a comment..." @click:append-outer="sendMessage"
                                        @click:clear="clearMessage" @keydown.enter="sendMessage">
    
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-expand-transition>
            </v-card>
    
            <v-divider class="my-4"></v-divider>
    
        </div>
    
    
    </v-container>
</template>

<script>
    import axios from "axios";
    import {
        mapGetters
    } from "vuex";
    
    export default {
        data() {
            return {
                comment: '',
                author: '',
                name: '',
                post_date: '',
                post_text: '',
                posts: [],
                show: false
            }
        },
        computed: mapGetters(["getToken","getId"]),
    
        methods: {
            sendMessage() {
                if (this.comment) this.clearMessage()
            },
            clearMessage() {
                this.comment = ''
            },
        },
        mounted: function() {
            try {
                axios
                    .get("http://localhost:1920/api/users/" + this.getId + "/posts", {
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
                            this.posts = res.data.feed;
                            console.log(this.posts);
                        }
                    })
                    .catch(err => {
                        console.log("Catch " + err);
                    });
            } catch (e) {
                console.log("ERROR: " + e);
                return e;
            }
        }
    }
</script>