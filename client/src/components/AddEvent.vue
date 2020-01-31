<template>
  <v-container class="text-center" dark>
    <v-dialog v-model="dialog" width="600">
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
          class="grey lighten-2 headline justify-center"
          primary-title 
        >
        <span >
        Create an Event
        </span>
        </v-card-title>

        <v-container>
    <v-row class="justify-space-around">
      <v-col cols="4" lg="3">
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
      <v-col cols="4">
      <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
<template v-slot:activator="{ on }">
  <v-text-field v-model="time" label="Pick event time..." prepend-icon="mdi-clock-outline" readonly v-on="on">
  </v-text-field>
</template>
        <v-time-picker
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
      </v-col>
      <v-col cols="4">
      <v-text-field v-model="local" placeholder="Set a local...">

      </v-text-field>
      </v-col>
      
      <v-row class="justify-center">
      <v-col cols="5">
        <v-text-field
          v-model="name"
          placeholder="Name your event..."
        ></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-combobox
          v-model="category"
          :items="['TP','Teste','Exame','Apresentação']"
          label="Select an event category"
        ></v-combobox>
      </v-col>
      </v-row>
    </v-row>
  </v-container>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          
          <v-btn
            color="light-blue darken-2"
            @click="createEvent"
            dark
          >
            Create Event
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import {
    mapGetters,
    mapMutations
  } from "vuex";
  
  export default {
    data() {
      return {
        name: '',
        dialog: false,
        date: null,
        time: null,
        category: null,
        menu1: false,
        menu2: false,
      }
    },
    computed: {
      ...mapGetters(["getToken", "getId"]),
  
      dateFormatted() {
        return this.formatDate(this.date)
      },
    },
    methods: {
      ...mapMutations(["addMyEvent", "removeToken"]),

      createEvent() {
        axios({
            method: "POST",
            url: "http://localhost:1920/api/users/" + this.getId + "/events",
            data: {
              name: this.name,
              start: this.date,
              end: this.date,
              time: this.time,
              category: this.category,
              local: this.local,
              color: this.getEventColor(this.category)
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
              this.addMyEvent(res.data)
            }
          })
          .catch(err => {
            console.log("Catch " + err);
          });
  
        this.dialog = false;
      },
      getEventColor(category) {
        if (category == "TP") return "orange"
        else if (category == "Teste") return "lime"
        else if (category == "Exame") return "blue"
        else return "teal"
      },
      formatDate(date) {
        if (!date) return null
  
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate(date) {
        if (!date) return null
  
        const [day, month, year] = date.split('-')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    }
  }
</script>