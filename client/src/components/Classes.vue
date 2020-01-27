<template>
    <v-container>
        <v-toolbar color="light-blue darken-4" height="40">
            <v-tabs grow v-model="tab" background-color="light-blue darken-4" centered dark slider-color="primary">
                <v-tabs-slider></v-tabs-slider>
    
                <v-tab href='#year1' @click="year = 1">
                    1st Year
    
                </v-tab>
    
                <v-tab href='#year2' @click="year = 2">
                    2nd Year
    
                </v-tab>
    
                <v-tab href='#year3' @click="year = 3">
                    3rd Year
    
                </v-tab>
    
                <v-tab href='#year4' @click="year = 4">
                    4th Year
    
                </v-tab>
    
                <v-tab href='#year5' @click="year = 5">
                    5th Year
                </v-tab>
    
    
            </v-tabs>
        </v-toolbar>
    
        <v-row class="justify-center">
            <v-col cols="6">
                <v-toolbar color="light-blue darken-4" height="40">
                    <v-tabs grow v-model="tab2" background-color="light-blue darken-4" centered dark slider-color="primary">
                        <v-tabs-slider></v-tabs-slider>
    
                        <v-tab href="#sem1" @click="sem = 1">
                            1st Semester
                        </v-tab>
    
                        <v-tab href="#sem2" @click="sem = 2">
                            2nd Semester
                        </v-tab>
    
                    </v-tabs>
                </v-toolbar>
            </v-col>
        </v-row>
        
         <v-tabs-items v-model="tab2">
          <v-tab-item value="sem1">
        
        <v-list two-line subheader class="mt-12">
            <v-list-item v-for="(item, i) in ucs[year].sem_1" :key="i">
                <v-card>{{item}}</v-card>
            </v-list-item>
    
        </v-list>
        </v-tab-item>

         <v-tab-item value="sem2">
        
        <v-list two-line subheader class="mt-12">
            <v-list-item v-for="(item, i) in ucs[year].sem_2" :key="i">
                <v-card>{{item}}</v-card>
            </v-list-item>
    
        </v-list>
        </v-tab-item>
        </v-tabs-items>
        
    </v-container>
</template>


<script>
    export default {
        data() {
            return {
                year: 1,
                sem: 1,
                tab: null,
                tab2: null,
                ucs: {
                    1: {
                        sem_1: ["1", "2"],
                        sem_2: ["3", "4"]
                    },
                    2: {
                        sem_1: ["5", "6"],
                        sem_2: ["7", "8"]
                    },
                    3: {
                        sem_1: ["9", "10"],
                        sem_2: ["11", "12"]
                    },
                    4: {
                        sem_1: ["13", "14"],
                        sem_2: ["15", "16"]
                    },
                    5: {
                        sem_1: ["17", "18"],
                        sem_2: ["19", "20"]
                    }
                }
            }
        }
    }
</script>

<style>
    .uc_1 {
        border-left: 6px solid #3cd1c2;
    }
    
    .uc_2 {
        border-left: 4px solid tomato;
    }
</style>