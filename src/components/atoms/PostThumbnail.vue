<template>
  <div class="postThumbnail">
    <div
        class="backgroundBox"
        :style="`background-image: url(${$props.image});`"
    />
  </div>
</template>

<script>
export default {
    name: 'PostThumbnail',
    props: {
        image: String,
    },
}
</script>

<style lang="scss">
  .postThumbnail {
      position: relative;
      display: flex;
      width: 100%;
      flex: 50% 0 1;
      height: 600px;
      border: 1px solid #eee;
      .backgroundBox {
          background-color: #E5E5E5;
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
