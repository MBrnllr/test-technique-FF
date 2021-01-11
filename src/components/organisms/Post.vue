<template>
  <div
    class="postContent"
    v-if="$props.post"
  >
    <div>
        <PostHeader :user="$props.user" />
        <PostThumbnail :image="$props.post.image" />
    </div>
    <div>
        <PostBody
            :user="$props.user"
            :post="$props.post"
        />
        <PostFooter :post="$props.post" />
    </div>
</div>
</template>

<script>
import PostThumbnail from '@/components/atoms/PostThumbnail.vue';
import PostHeader from '@/components/molecules/PostHeader.vue';
import PostFooter from '@/components/molecules/PostFooter.vue';
import PostBody from '@/components/molecules/PostBody.vue';


export default {
    name: 'Post',
    components: {
        PostThumbnail,
        PostHeader,
        PostBody,
        PostFooter,
    },
    props: {
        post: Object,
        user: Object,
    },
}
</script>

<style lang="scss">
  .postContent {
      position: relative;
      width: 100%;
      max-width: 1140px;
      margin: auto;
  }
</style>
