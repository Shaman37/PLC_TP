<template>
    <v-container>
        <v-divider class="my-3"></v-divider>
        <v-divider class="my-4"></v-divider>
        <v-list two-line subheader class="mt-6">
            <v-card>
                <v-list-item  class="uc_1">
                    <v-list-item-content>
                        <v-list-item-title>
                            PRI
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Processamento e Reconhecimento de Informação
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            <v-divider class="my-4"></v-divider>
            <v-card>
                <v-list-item class="uc_2">
                    <v-list-item-content>
                        <v-list-item-title>
                            GCS
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Gramáticas na Compreensão de Software
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-list>
    
    </v-container>
</template>


<script>
    export default {
        data() {
            return {
                tab: null,
                tab2: null
            }
        }
    }
</script>

<style>
.uc_1 {
    border-left: 6px solid #3cd1c2;
}
.uc_2 {
    border-left: 6px solid tomato;
}
</style>