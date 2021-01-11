<template>
    <div id="mainContent">
        <Header />
        <div id="pageContent">
            <PageHeader title="Feeds" />
            <Grid :posts="$props.data" />
            <Button
                v-if="!this.allPostsLoaded"
                :onClick="this.seeMore"
                theme="primary"
                :plain="false"
                label="Voir plus"
            />
        </div>
        <Footer />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Header from '@/components/organisms/Header.vue';
import PageHeader from '@/components/organisms/PageHeader.vue';
import Footer from '@/components/organisms/Footer.vue';
import Grid from '@/components/organisms/Grid.vue';
import Button from '@/components/atoms/Button.vue';

export default {
    name: 'Listing',
    components: {
        Header,
        PageHeader,
        Footer,
        Grid,
        Button,
    },
    props: {
        data: Array,
    },
    computed: {
        ...mapGetters([
            'allPostsLoaded',
        ]),
    },
    methods: {
        seeMore() {
            this.$store.dispatch('incrementPagePosts');
        },
    },
}
</script>

<style lang="scss">
    #mainContent {
        display: flex;
        flex-flow: column;
        flex: 1;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    #pageContent {
        display: flex;
        flex-flow: column;
        flex: 1;
        margin-bottom: 4em;
    }
</style>
