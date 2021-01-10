<template>
  <Listing :data="$data.data" />
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
        };
    },
    beforeMount () {
        this.getName();
    },
    methods: {
        async getName () {
            const { data } = await axios.get('https://5ff9ce0917386d0017b521c4.mockapi.io/fake-api/posts');
            this.$data.data = data;
        },
    },
}
</script>
