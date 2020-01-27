<template>
  <v-container height="800" fill-height>
    <v-row>
      <v-col cols=12>
        <v-sheet height="600">
          <v-calendar ref="calendar" v-model="value" :weekdays="weekday" :type="type" :events="events" :event-overlap-mode="mode" :event-overlap-threshold="30" :event-color="getEventColor" @change="getEvents"></v-calendar>
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

  export default {
    components: {
      AddEvent
    },
    data: () => ({
      type: 'month',
      mode: 'stack',
      weekday: [0, 1, 2, 3, 4, 5, 6],
      value: '',
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: [],
    }),
    methods: {
      getEvents({
        start,
        end
      }) {
        const events = []
  
        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)
  
        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)
  
          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: this.formatDate(first, !allDay),
            end: this.formatDate(second, !allDay),
            color: this.colors[this.rnd(0, this.colors.length - 1)],
          })
        }
  
        this.events = events
      },
      getEventColor(event) {
        return event.color
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