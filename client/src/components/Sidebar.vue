<template>
    <div>
        <!-- Side Drawer -->
        <v-navigation-drawer clipped permanent app v-model="drawer" width="275" color="grey lighten-4">
            <v-row class="text-center">
                <v-col cols="12" class="mt-10">
                    <v-avatar size="175" color="red">
                        <img src="src" alt="alt">
                    </v-avatar>
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">João Leal</v-list-item-title>
                            <v-list-item-subtitle class="mt-2 text-wrap">Mestrado Integrado em Engenharia Informática</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
    
            <v-divider></v-divider>
            <v-divider class="mt-2"></v-divider>
    
            <v-list nav rounded class="mt-3">
    
                <v-list-item link router :to="'/'">
                    <v-list-item-icon>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
    
                </v-list-item>
    
                <v-divider inset></v-divider>
    
                <v-list-item link router :to="'/friends'">
                    <v-list-item-icon>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Friends</v-list-item-title>
                    </v-list-item-content>
    
                </v-list-item>
    
                <v-divider inset></v-divider>
                
                <v-list-item link router :to="'/groups'">
                    <v-list-item-icon>
                        <v-icon>mdi-google-circles-extended</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Groups</v-list-item-title>
                    </v-list-item-content>
    
                </v-list-item>
    
                <v-divider inset></v-divider>
                
                <v-list-item link router :to="'/course'">
                    <v-list-item-icon>
                        <v-icon>mdi-school</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Course</v-list-item-title>
                    </v-list-item-content>
    
                </v-list-item>
    
                <v-divider inset></v-divider>
    
                <v-list-item link router :to="'/album'">
                    <v-list-item-icon>
                        <v-icon>mdi-image</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        Photo Album
                    </v-list-item-content>
    
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: true,
            }
        }
    }
</script>