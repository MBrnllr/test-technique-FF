<template>
    <div id="mainContent">
        <Header />
        <section>Hello world</section>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/organisms/Header.vue';
import Footer from '@/components/organisms/Footer.vue';

export default {
    name: 'Listing',
    components: {
        Header,
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
</style>
