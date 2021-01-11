<template>
  <Listing
    v-if="$data.data"
    :data="$data.data"
  />
</template>

<script>
import Listing from '@/components/templates/Listing.vue';

const axios = require('axios');

export default {
    name: 'Home',
    components: {
        Listing,
    },
    data () {
        return {
            data: [],
            page: Number,
        };
    },
    beforeMount () {
        this.getPosts();
    },
    methods: {
        async getPosts () {
            const { data } = await axios.get('https://5ff9ce0917386d0017b521c4.mockapi.io/fake-api/posts?page=1&limit=9');
            this.$data.data = data;
        },
    },
}
</script>
