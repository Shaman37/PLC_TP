<template>
    <v-row>
        <v-col cols="12">
            <v-card class="scroll2">
                <v-row>
                    <v-col v-for="n in 20" :key="n" class="d-flex child-flex" cols="4">
                        <v-card class="d-flex mx-2">
                            <v-row>
                                <v-col cols="4">
                                    <v-avatar size="175" color="red" class="ml-3">
                                        <img src="src" alt="alt">
                                    </v-avatar>
                                </v-col>
    
                                <v-col cols="8">
                                    <v-row class="justify-center text-center">
                                        <v-col cols="12">
                                            <v-text class="mt-12 mx-4 title">Manuel Monteiro</v-text>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text class="mt-2 mx-4 subheader text-wrap">Mestrado Integrado em Engenharia Informática</v-text>
                                        </v-col>
                                    </v-row>
                                    <v-divider class="mt-12"></v-divider>
                                </v-col>
    
                                <v-col cols="12" class="mx-4 text-wrap">
                                    <v-text>
                                        B
                                    </v-text>
                                </v-col>

                                <v-col cols="12" class="text-center">
                                <v-divider></v-divider>
                                    <v-btn icon class="pt-3">
                                <v-icon text fab light>mdi-arrow-right</v-icon>
                            </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
    
    
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
    
    }
</script>