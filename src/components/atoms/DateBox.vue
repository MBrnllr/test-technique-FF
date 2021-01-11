<template>
  <div class="dateBox">
    <div class="day">
      {{this.$data.dateFormatted[1]}}
    </div>
    <div class="month">
      {{this.$data.dateFormatted[2] | month}}
    </div>
  </div>
</template>

<script>
export default {
    name: 'DateBox',
    props: {
        date: String,
    },
    data () {
        return {
            dateFormatted: String,
        };
    },
    filters: {
        month: function (value) {
            if (!value) return '';
            const months = ['Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juill.', 'Aout', 'Sept.', 'Oct.', 'Nov.', 'Déc.']
            return months[value];
        },
    },
    mounted() {
        this.$data.dateFormatted = this.$props.date.split('T')[0].split('-');
    },
}
</script>

<style lang="scss">
  .dateBox {
      display: flex;
      flex-flow: column;
      font-weight: 500;
      padding: 1em;
      width: 50px;
      height: 50px;
      margin-right: 1em;
      color: $secondary;
      border-width: 0px;
      border-style: solid;
      border-color: #ff9444 #ff648c #ff648c #ff9444;
      border-right-width: 2px;
      @media screen and (max-width: $breakpointMd){
        border-right-width: 0px;
        border-bottom-width: 2px;
      }
      .day {
          font-size: 1.5em;
      }
      .month {
          text-transform: uppercase;
      }
  }
</style>
