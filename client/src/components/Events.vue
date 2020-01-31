<template>
  <v-container>
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat color="white">
            <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
              Today
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar ref="calendar" v-model="focus" color="primary" :events="events" :event-color="getEventColor" :now="today" :type="type" @click:event="showEvent" @change="updateRange"></v-calendar>
          <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
            <v-card color="grey lighten-4" min-width="350px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text class="subtitle-1">{{selectedEvent.local}}</v-text>
                <v-text class="subtitle-2">({{selectedEvent.time}})</v-text>
                <v-divider class="ml-3" vertical inset></v-divider>
                <v-btn fab icon @click="deleteEvent(selectedEvent)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row bottom right>
      <v-col>
        <AddEvent/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import AddEvent from '@/components/AddEvent'
  import {
    mapGetters,
    mapMutations
  } from "vuex";
  import axios from 'axios'
  
  export default {
    name: "Events",
    components: {
      AddEvent
    },
    data: () => ({
      focus: '',
      type: 'month',
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
    }),
    computed: {
      ...mapGetters(["getToken", "getId", "getEvents"]),
      events() {
        return this.getEvents
      },
      title() {
        const {
          start,
          end
        } = this
        if (!start || !end) {
          return ''
        }
  
        const startMonth = this.monthFormatter(start)
        const startYear = start.year
  
        return `${startMonth} ${startYear}`
  
      },
      monthFormatter() {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC',
          month: 'long',
        })
      },
    },
    mounted: function() {
      try {
        axios
          .get("http://localhost:1920/api/users/" + this.getId + "/events", {
            headers: {
              Authorization: "Bearer " + this.getToken
            }
          })
          .then(res => {
            if (res.data.status == "ERROR INVALID TOKEN") {
              localStorage.removeItem("access_token");
              this.removeToken();
              this.$router.push("/");
            } else {
  
              this.setEvents(res.data.events)
            }
          })
          .catch(err => {
            console.log("Catch " + err);
          });
      } catch (e) {
        console.log("ERROR: " + e);
        return e;
      }
    },
    methods: {
      ...mapMutations(["setEvents", "removeToken", "removeEvent"]),
      deleteEvent(event) {
        axios({
            method: "DELETE",
            url: "http://localhost:1920/api/users/" + this.getId + "/events",
            data: {
              eventId: event._id
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
                  this.removeEvent(event)
                  
                }
              })
            .catch(err => {
              console.log("Catch " + err);
            });
            this.selectedOpen = false
          },
          getEventColor(event) {
            if (event.category == "TP") return "orange"
            else if (event.category == "Teste") return "lime"
            else if (event.category == "Exame") return "blue"
            else if (event.category == "Apresentação") return "teal"
          },
          setToday() {
            this.focus = this.today
          },
          prev() {
            this.$refs.calendar.prev()
          },
          next() {
            this.$refs.calendar.next()
          },
          showEvent({
            nativeEvent,
            event
          }) {
            const open = () => {
              this.selectedEvent = event
              this.selectedElement = nativeEvent.target
              setTimeout(() => this.selectedOpen = true, 10)
            }
  
            if (this.selectedOpen) {
              this.selectedOpen = false
              setTimeout(open, 10)
            } else {
              open()
            }
  
            nativeEvent.stopPropagation()
          },
          updateRange({
            start,
            end
          }) {
            this.start = start
            this.end = end
          },
          nth(d) {
            return d > 3 && d < 21 ?
              'th' : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
          },
          rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
          },
          formatDate(a, withTime) {
            return withTime ?
              `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}` :
              `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
          },
      },
    }
</script>