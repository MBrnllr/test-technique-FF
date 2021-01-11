<template>
  <transition-group
    name="grid"
    tag="div"
    class="grid grid-cards"
  >
    <PostCard
      v-for="(post, index) in $props.posts"
      v-bind:key="`post-${index}-${post.id}`"
      :post="post"
      class="grid-item"
    />
  </transition-group>
</template>

<script>
import PostCard from '@/components/molecules/PostCard.vue';

export default {
    name: 'Grid',
    components: {
        PostCard,
    },
    props: {
        posts: Array,
    },
}
</script>

<style lang="scss">
  .grid {
      display: inline-flex;
      margin: -12px auto -12px;
      width: calc(100% + 12px);
      max-width: 1140px;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding-bottom: 1em;
       @media screen and (max-width: $breakpointMd){
            width: calc(90% + 12px);
        }
      > * {
        margin: 12px 0 0 12px;
    }
  }

  .grid-item {
    display: inline-block;
  }
  .grid-enter-active, .grid-leave-active {
    transition: all 1s;
  }
  .grid-enter, .grid-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: scale(0.5);
  }
</style>
