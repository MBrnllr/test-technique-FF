<template>
  <div class="postBody"  >
    <div class="heading">
        <DateBox :date="$props.post.createdAt" />
    </div>
    <div>
        <div class="description">{{$props.post.description}}</div>
        <div class="commentsList">
            <Comment
                v-for="comment in $props.post.comments"
                v-bind:key="`comment-${comment.id}`"
                :userId="comment.userId"
                :message="comment.content"
            />
        </div>
    </div>
  </div>
</template>

<script>
import DateBox from '@/components/atoms/DateBox.vue';
import Comment from '@/components/molecules/Comment.vue';


export default {
    name: 'PostBody',
    components: {
        DateBox,
        Comment,
    },
    props: {
        userId: Number,
        post: Object,
    },
    computed: {
        user () {
            return this.$store.getters.getUserById(this.$props.userId);
        },
    },
}
</script>

<style lang="scss">
  .postBody {
      display: flex;
      background-color: $light;
      padding: 1em;
      @media screen and (max-width: $breakpointMd){
        flex-flow: column;
      }
      .heading {
          display: flex;
      }
      .description {
          margin-top: 1em;
          text-align: left;
      }
      .commentsList {
          margin-top: 2em;
          text-align: left;
      }
  }
</style>
