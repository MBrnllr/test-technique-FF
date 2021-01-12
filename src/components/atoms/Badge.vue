<template>
  <div class="badge">
    <div
        class="backgroundBox"
        :style="`background-image: url(${$props.image});`"
    />
  </div>
</template>

<script>
export default {
    name: 'Badge',
    props: {
        image: String,
    },
}
</script>

<style lang="scss">
  .badge {
      position: relative;
      display: inline-flex;
      width: 60px;
      height: 60px;
      border: 1px solid $borderColor;
      border-radius: 50%;
      overflow: hidden;
      .backgroundBox {
          background-color: $borderColor;
          background-size: cover;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
      }
  }
</style>
