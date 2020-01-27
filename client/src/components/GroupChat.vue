<style>
    .scroll4 {
        overflow-y: auto;
        max-height: 595px;
    }
</style>

<template>
<v-card>
<v-container>
    <v-toolbar dark color="light-blue darken-2">
                    <v-spacer></v-spacer>
                    <v-toolbar-title>
                        João vieira
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card color="grey lighten-5" class="scroll">
                    <v-responsive :aspect-ratio="20/9">
                        <v-row class="mt-2">
                            <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                                <v-avatar class="ml-10" color="green" size="40">
                                </v-avatar>
                            </v-col>
    
                            
                                <v-card color="grey lighten-3" shaped class="ml-6 mr-12 mt-2" max-width="65%">
                                    <v-card-text>
                                        {{message1}}
                                    </v-card-text>
                                </v-card>
                        </v-row>
                        <br>
                        <v-row class="justify-end align-center">
                                <v-card shaped class="mr-6 ml-12 mb-4" max-width="65%">
                                    <v-card-text>
                                        Mensagem do próprio
                                    </v-card-text>
                                </v-card>
                                
                        </v-row>
                        
                    </v-responsive>
                </v-card>
        <v-row class="justify-end mt-n6">
        <v-col cols="12">
        <v-toolbar color="light-blue darken-2" height="90">
                    <v-text-field class="mt-8" background-color="grey lighten-3" v-model="message" :append-outer-icon="message ? 'mdi-send' : ''" color="black" rounded filled outlined clear-icon="mdi-close-circle" clearable type="text" label="Message" light placeholder="Write a message..."
                        @click:append-outer="sendMessage" @click:clear="clearMessage" @keydown.enter="sendMessage">
    
                    </v-text-field>
                </v-toolbar>
                </v-col>
                </v-row>
                </v-container>
                </v-card>
</template>
<script>
export default {
        data() {
            return {
                message: '',
                message1: 'antigo',
            }
        },
        methods: {
            sendMessage() {
                if (this.message) this.clearMessage()
            },
            clearMessage() {
                this.message = ''
            }
        },
    }
</script>