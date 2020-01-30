<style>
    .scroll {
        overflow-y: auto;
        max-height: 595px;
    }
</style>

<template>
    <v-container class="mb-n2">
        <v-row>
            <!-- Contact List -->
            <v-col cols="2">
                <v-toolbar class="align-center" color="light-blue darken-2" dark>
                    <v-toolbar-title>
                        <v-icon>mdi-contacts</v-icon>
                        <span class="ml-6 text-center">Contacts</span>
                    </v-toolbar-title>
                </v-toolbar>
                <v-navigation-drawer class="scroll" permanent color="grey lighten-5">
                    <v-list nav rounded>
                        <!-- Iterate through contact list -->
                        <v-list-item link v-for="(friend,index) in friends" :key="index" @click="select=index;">
                            <v-list-item-title>
                                <v-avatar color="green">
                                </v-avatar>
                                <span class="ml-6">{{friend.name}}</span>
                            </v-list-item-title>
                        </v-list-item>
                        <!-- || -->
                        <v-divider class="my-4"></v-divider>
                    </v-list>
                </v-navigation-drawer>
            </v-col>
            <!-- Chat Window @click="message1 = 'antigo'" -->
            <v-col cols="10">
                <v-toolbar dark color="light-blue darken-2">
                    <v-spacer></v-spacer>
                    <v-toolbar-title>
                        
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card color="grey lighten-5" class="scroll">
                    <v-responsive :aspect-ratio="20/9">
                    <v-container v-for="(message,index) in curr_chat.messages" :key="index">
                        <v-row class="mt-2" v-if="message.author != this.getId">
                            <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                                <v-avatar class="ml-10" color="green" size="40">
                                </v-avatar>
                            </v-col>
    
                            <v-card color="grey lighten-3" shaped class="ml-6 mr-12 mt-2" max-width="65%">
                                <v-card-text>
                                    {{message.text}}
                                </v-card-text>
                            </v-card>
                        </v-row>
                        <br>
                        <v-row class="justify-end align-center" v-if="message.author == this.getId">
                            <v-card shaped class="mr-6 ml-12 mb-4" max-width="65%">
                                <v-card-text>
                                    {{message.text}}
                                </v-card-text>
                            </v-card>
    
                        </v-row>
    </v-container>
                    </v-responsive>
                </v-card>
    
            </v-col>
        </v-row>
        <v-row class="justify-end mt-n6">
            <v-col cols="10">
                <v-toolbar color="light-blue darken-2" height="90">
                    <v-text-field class="mt-8" background-color="grey lighten-3" v-model="chat_text" :append-outer-icon="chat_text ? 'mdi-send' : ''" color="black" rounded filled outlined clear-icon="mdi-close-circle" clearable type="text" label="Message" light placeholder="Write a message..."
                        @click:append-outer="sendMessage" @click:clear="clearMessage" @keydown.enter="sendMessage">
    
                    </v-text-field>
                </v-toolbar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from "axios";
    import {
        mapGetters,
        mapMutations
    } from "vuex";
    
    export default {
        data() {
            return {
                chat_text: '',
                friends: [],
                curr_chat: {},
                select: 0,
                prev: ""
            }
        },
        computed: mapGetters(["getToken", "getId", "getPosts", "getCurrentChat"]),
        methods: {
            ...mapMutations(["addMessage"]),
    
            getChat() {
                axios("http://localhost:1920/api/users/" + this.getId + "/chats",
                       { headers: {
                            Authorization: "Bearer " + this.getToken
                        }}
                    ).then(res => {
                        if (res.data.status == "ERROR INVALID TOKEN") {
                            localStorage.removeItem("access_token");
                            this.removeToken();
                            this.$router.push("/");
                        } else {
                            return res.data[this.select];
                        }
                    })
                    .catch(err => {
                        console.log("Catch " + err);
                    });
            },
    
            sendMessage() {
                if (this.message) {
                    axios({
                            method: "POST",
                            url: "http://localhost:1920/api/chats/" + this.curr_chat._id + "/messages",
                            data: {
                                content: this.chat_text,
                                author: this.getId
                            },
                            headers: {
                                Authorization: "Bearer " + this.getToken
                            }
                        }).then(res => {
                            if (res.data.status == "ERROR INVALID TOKEN") {
                                localStorage.removeItem("access_token");
                                this.removeToken();
                                this.$router.push("/");
                            } else {
                               console.log(res.data);
                            }
                        })
                        .catch(err => {
                            console.log("Catch " + err);
                        });
                    this.clearMessage()
                }
            },
            clearMessage() {
                this.message = ''
            }
        },
        mounted: function() {
            try {
                axios
                    .get("http://localhost:1920/api/users/" + this.getId + "/friends", {
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
                            console.log(res.data.friends)
                            this.friends = res.data.friends;
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