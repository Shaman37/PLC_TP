<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
          <v-btn
            color="light-blue darken-2"
            dark
            fab
            v-on="on"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2 justify-center"
          primary-title 
        >
        Create an Event
        </v-card-title>

        <v-container>
    <v-row>
      <v-col cols="6" lg="6">
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field v-model="dateFormatted" label="Event Date" persistent-hint prepend-icon="mdi-calendar" v-on="on">
            </v-text-field>
          </template>
          
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="6">
        <v-combobox
          :items="['TP','Teste','Exame']"
          label="Select an event category"
          
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Create Event
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        date: null,
        menu1: false,
        menu2: false,
      }
    },
    computed: {
      dateFormatted () {
        return this.formatDate(this.date)
      },
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    }
  }
</script>