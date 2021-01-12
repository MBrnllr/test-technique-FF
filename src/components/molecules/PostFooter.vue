<template>
  <div class="postFooter"  >
    <div class="actionsBar">
        <span class="likeStatus" v-if="$props.post && $props.post.likes">
            <Icon icon="heart" />
            <span class="total">{{$props.post.likes.length}}</span>
        </span>
    </div>
    <div class="commentForm">
        <a href="/">Connectez-vous</a> pour aimer ou commenter
    </div>
  </div>
</template>

<script>
import Icon from '@/components/atoms/Icon.vue';

export default {
    name: 'PostHeader',
    components: {
        Icon,
    },
    props: {
        post: Object,
    },
}
</script>

<style lang="scss">
  .postFooter {
      position: relative;
      display: flex;
      width: 100%;
      flex: 50% 0 1;
      flex-flow: column;
      border-top: 1px solid $borderColor;
      background-color: $light;
      .actionsBar {
          padding: 1em;
          display: flex;
          .likeStatus {
              display: flex;
              align-items: center;
              svg {
                  margin-top: 5px;
              }
              .total {
                  margin-left: .5em;
              }
          }
      }
      .commentForm {
         padding: 1em 0;
         border-top: 1px solid $borderColor;
         a {
             color: $secondary;
         }
      }
  }
</style>
