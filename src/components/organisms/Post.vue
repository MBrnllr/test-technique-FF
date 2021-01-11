<template>
    <div>
  <div
    class="postContent"
    v-if="this.post"
  >
    <div>
        <PostHeader :userId="this.post.userId" />
        <PostThumbnail :image="this.post.image" />
    </div>
    <div>
        <PostBody
            :userId="this.post.userId"
            :post="this.post"
        />
        <PostFooter :post="this.post" />
    </div>
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
    computed: {
        post () {
            return this.$store.getters.getPostById(this.$router.history.current.params.postId);
        },
    },
    beforeMount () {
        this.$store.dispatch('getPost', this.$router.history.current.params.postId);
        this.$store.dispatch('getUsers');
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
