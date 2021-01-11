<template>
  <div class="dateBox">
    <div class="day">16</div>
    <div class="month">Déc</div>
  </div>
</template>

<script>
export default {
    name: 'DateBox',
    props: {
        date: String,
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
