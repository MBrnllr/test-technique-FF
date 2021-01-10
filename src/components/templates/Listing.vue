<template>
    <div id="mainContent">
        <Header />
        <div id="pageContent">
            <PageHeader title="Feeds" />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/organisms/Header.vue';
import PageHeader from '@/components/organisms/PageHeader.vue';
import Footer from '@/components/organisms/Footer.vue';

export default {
    name: 'Listing',
    components: {
        Header,
        PageHeader,
        Footer,
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
    }
</style>
