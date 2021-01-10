<template>
  <div class="postBody"  >
    <div>
        <Badge :image="$props.user.avatar" />
    </div>
    <div>
        <UserName
            :firstName="$props.user.firstName"
            :lastName="$props.user.lastName"
        />
        {{post.createdAt}}
        <div class="description">{{post.description}}</div>
        <div>
            <div
                v-for="comment in $props.post.comments"
                v-bind:key="`comment-${comment.id}`">
                {{comment.userId}} :
                {{comment.content}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Badge from '@/components/atoms/Badge.vue';
import UserName from '@/components/atoms/UserName.vue';

export default {
    name: 'PostHeader',
    components: {
        Badge,
        UserName,
    },
    props: {
        user: Object,
        post: Object,
    },
}
</script>

<style lang="scss">
  .postBody {
      background-color: white;
      padding: 1em;
      .description {
          margin-top: 2em;
      }
  }
</style>
