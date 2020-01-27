<style>
    .scroll5 {
        overflow-y: auto;
        max-height: 700px;
    }
</style>

<template>
<div>
    <v-container> 
        <v-responsive :aspect-ratio="16/9">
            <v-toolbar absolute width="100%">
      <v-tabs grow v-model="tab" background-color="light-blue darken-4" centered dark slider-color="primary">
  
        <v-tabs-slider></v-tabs-slider>
  
        <v-tab href="#tab-1">
          Active
          <v-icon class="mx-3">mdi-format-list-checkbox</v-icon>
        </v-tab>
  
        <v-tab href="#tab-2">
          Pending
          <v-icon class="mx-3">mdi-clock-outline</v-icon>
        </v-tab>
  
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <v-container class="scroll5">
                <v-list two-line subheader >
                    <v-card>
                    <v-list-item>
                        <v-list-item-avatar color="green">
                            
                        </v-list-item-avatar>
                        <v-list-item-content>
                        <v-list-item-title>
                            João Leal
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Admin
                        </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-actions>
                        <v-btn icon>
                            <DeleteMember/>
                            </v-btn>
                            <v-btn icon>
                                <v-icon text fab light>mdi-arrow-right</v-icon>
                            </v-btn>
                            
                        </v-list-actions>
                    </v-list-item>
                    </v-card>

                    <v-divider class="my-4"></v-divider>                 
                </v-list>
            </v-container>
          </v-tab-item>
  
          <v-tab-item value="tab-2">
          <v-container class="scroll5">
                <v-list two-line subheader >
                    
            <v-card>
                    <v-list-item>
                        <v-list-item-avatar color="red">
                            
                        </v-list-item-avatar>
                        <v-list-item-content>
                        <v-list-item-title>
                            João Vieira
                        </v-list-item-title>
                        </v-list-item-content>
                        <v-list-actions>
                            <v-btn icon>
                                <v-icon fab light color="green">mdi-check-circle</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon text fab light color="red">mdi-close-circle</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon text fab light>mdi-arrow-right</v-icon>
                            </v-btn>
                            
                        </v-list-actions>
                    </v-list-item>
                    </v-card>                

                    <v-divider class="my-4"></v-divider>             
                </v-list>
            </v-container>
          
          </v-tab-item>
  
        </v-tabs-items>
      </v-tabs>
      </v-toolbar>
        </v-responsive>
    </v-container>
        
        </div>
</template>

<script>

import DeleteMember from '@/components/DeleteMember'

export default {
    components: {
        
        DeleteMember
    },
    data () {
    return {
        tab: null
      }
  }
}
</script>