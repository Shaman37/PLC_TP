<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="750">
      <template v-slot:activator="{ on }">
            <v-btn
            icon
              text
              light
              fab
              v-on="on"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
      </template>

      <v-card > 
        <v-card-title
          class="headline grey lighten-2 justify-center"
          primary-title
        >
          Remove Member
        </v-card-title>

        <v-container>
            
        </v-container>
        

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          
          <v-btn
            color="light-blue darken-2"
            dark
            @click="removeMember(gId,uId)"            
          >
            <div class="text-center">
            Remove
            </div>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name:'DeleteMember',
    props:{
      gId: String,
      uId: String
    },
    data() {
      return {
        dialog: false,
      }
    },
    methods:{
      removeMember(groupId,userId){
        //axios ded
        console.log(groupId,userId)
      }
    }
  }
</script>