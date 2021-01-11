<template>
  <Listing
    v-if="!this.$data.loader"
    :data="this.posts"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import Listing from '@/components/templates/Listing.vue';

export default {
    name: 'Home',
    components: {
        Listing,
    },
    data () {
        return {
            data: [],
            page: Number,
            loader: true,
        };
    },
    computed: {
        ...mapGetters([
            'posts',
        ]),
    },
    beforeMount () {
        if (this.$data.loader) {
            this.$store.dispatch('getPosts')
                .then(() => { this.$data.loader = false; })
                .catch(() => { this.$data.loader = false; });
        }
    },
}
</script>
