<template>
  <SinglePost
    v-if="$data.post && $data.user"
    :post="$data.post"
    :user="$data.user" />
</template>

<script>
import SinglePost from '@/components/templates/SinglePost.vue';

const axios = require('axios');

export default {
    name: 'PostDetails',
    components: {
        SinglePost,
    },
    data () {
        return {
            post: {},
            user: {},
        };
    },
    beforeMount () {
        this.getPostDetails();
    },
    methods: {
        async getPostDetails () {
            const postId = this.$route.params.postId;
            const { data } = await axios.get(`https://5ff9ce0917386d0017b521c4.mockapi.io/fake-api/posts/${postId}`);
            this.$data.post = data;
            this.getUserDetails();
        },
        async getUserDetails () {
            const userId = this.$data.post.userId;
            const { data } = await axios.get(`https://5ff9ce0917386d0017b521c4.mockapi.io/fake-api/users/${userId}`);
            this.$data.user = data ? data : {name: 'Anonymous'};
        },
    },
}
</script>
