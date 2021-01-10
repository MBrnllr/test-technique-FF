<template>
  <div id="pageHeader">
    <h1>{{$props.title}}</h1>
  </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    },
}
</script>

<style lang="scss">
  #pageHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $headerBg;
    padding: 0.5em 2em;
    box-sizing: border-box;
    margin-bottom: 2em;
      h1 {
        text-transform: uppercase;
        text-align: center;
        color:hsla(0,0%,100%,.85);
        font-size: 1.5em;
      }
  }
</style>
