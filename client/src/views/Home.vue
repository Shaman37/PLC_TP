<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="5">
                <v-card>
                    <v-toolbar dark color="light-blue darken-2">
                        <v-spacer></v-spacer>
                        <v-toolbar-title class="title text-center text--white">
                            Login
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="email" label="Login" type="email" prepend-icon="mdi-account" />
    
                            <v-text-field v-model="password" label="Password" type="password" prepend-icon="mdi-lock" />
                        </v-form>
                    </v-card-text>
    
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="light-blue darken-2" @click="login">Login</v-btn>
                        <v-spacer />
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="2">
                <v-divider vertical></v-divider>
            </v-col>
            <v-col cols="5">
                <v-card> Registar </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>   
    import axios from "axios";
    import { mapMutations } from "vuex";

    export default {
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            ...mapMutations(["setToken","setId","setPosts"]),
    
            login() {
                // console.log("entrei submit");
                axios
                    .post("http://localhost:1920/api/users/login", {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        switch (response.data.status) {
                            case "OK LOGGED":
                                if (this.shouldStayLoggedIn) {
                                    localStorage.setItem("access_token", response.data.token);
                                    localStorage.setItem("current_user", response.data.uid);
                                    localStorage.setItem("user_posts", 0);
                                }
    
                                this.setToken(response.data.token);
                                this.setId(response.data.uid);
                                this.$router.push("/dashboard");
                                break;
    
                            default:
                                this.msgerror = "Authentication Failed! Invalid Credentials.";
                                this.$router.push("/home");
                                break;
                        }
                    })
                    .catch(err => {
                        console.log("ERRRRRRROOOO", err)
                        this.$router.push("/notfound");
                    });
            }
        }
    }
</script>