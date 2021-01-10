<template>
    <div id="mainContent">
        <Header />
        <div id="pageContent">
            <PageHeader title="Feeds" />
            <Grid :posts="$props.data" />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/organisms/Header.vue';
import PageHeader from '@/components/organisms/PageHeader.vue';
import Footer from '@/components/organisms/Footer.vue';
import Grid from '@/components/organisms/Grid.vue';

export default {
    name: 'Listing',
    components: {
        Header,
        PageHeader,
        Footer,
        Grid,
    },
    props: {
        data: Array,
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
