<template>
  <div class="card"  v-if="$props.post && $props.post.image" v-on:click="openSinglePostPage()">
    <div class="backgroundBox" :style="`background-image: url(${$props.post.image});`"></div>
    <div class="contentBox">
        <span class="status statusLikes">
            <Icon icon="heart" />
            <span class="total">{{$props.post.likes.length}}</span>
        </span>
        <span class="status statusComment">
            <Icon icon="comment" />
            <span class="total">{{$props.post.comments.length}}</span>
        </span>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/atoms/Icon.vue';

export default {
    name: 'PostCard',
    props: {
        post: Object,
    },
    components: {
        Icon,
    },
    methods: {
        openSinglePostPage () {
            this.$router.push(`/post/${this.$props.post.id}`);
        },
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
      border: 1px solid $borderColor;
      cursor: pointer;
      @media screen and (max-width: $breakpointMd){
        flex: 28% 0 1;
        height: 115px;
      }
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
      .contentBox {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: $borderColor;
          opacity: 0;
          transition: all 0.5s ease;
          &:hover {
              opacity: 1;
          }
          .status {
              display: flex;
              align-items: center;
              font-weight: 700;
              + .status {
                  margin-left: 1.5em;
              }
              .total {
                  margin-left: .5em;
              }
          }
      }
  }
</style>
