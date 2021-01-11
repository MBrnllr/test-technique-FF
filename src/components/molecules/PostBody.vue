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
    name: 'PostHeader',
    components: {
        DateBox,
        Comment,
    },
    props: {
        user: Object,
        post: Object,
    },
}
</script>

<style lang="scss">
  .postBody {
      display: flex;
      background-color: white;
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
