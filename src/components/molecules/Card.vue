<template>
  <div class="card"  v-if="$props.post && $props.post.image">
    <div class="backgroundBox" :style="`background: url(${$props.post.image});`"></div>
    <div class="contentBox">
        <span>Likes : {{$props.post.likes.length}}</span>
        -
        <span>Comment : {{$props.post.comments.length}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        post: Object,
    },
}
</script>

<style lang="scss">
  .card {
      position: relative;
      display: flex;
      width: 100%;
      flex: 32% 0 1;
      height: 350px;
      background-color: #E5E5E5;
      border: 1px solid #eee;
      cursor: pointer;
      .contentBox {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
      }
  }
</style>
