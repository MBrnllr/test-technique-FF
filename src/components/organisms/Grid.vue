<template>
  <div class="grid grid-cards">
      <Card
        v-for="post in $props.posts"
        v-bind:key="post.id"
        :post="post"
      />
  </div>
</template>

<script>
import Card from '@/components/molecules/Card.vue';

export default {
    name: 'Grid',
    components: {
        Card,
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
      > * {
        margin: 12px 0 0 12px;
    }
  }
</style>
