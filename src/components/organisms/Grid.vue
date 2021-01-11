<template>
  <div class="grid grid-cards">
      <PostCard
        v-for="post in $props.posts"
        v-bind:key="post.id"
        :post="post"
      />
  </div>
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
</style>
